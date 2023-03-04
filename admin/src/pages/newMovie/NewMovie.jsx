import "./NewMovie.css";
import {useContext, useState} from "react";
import storage from '../../FireBase'
import {MovieContext} from "../../context/movieContext/MovieContext";
import {createMovie} from "../../context/movieContext/ApiCalls";

export default function NewMovie() {
  const [movie, setMovie] = useState(null) /// одно состояние для всех инпутов
  const [imgTitle, setImgTitle] = useState(null)
  const [imgSm, setImgSm] = useState(null)
  const [img, setImg] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [video, setVideo] = useState(null)
  const [uploaded, setUploaded] = useState(0)
  const {dispatch} = useContext(MovieContext)

  const handleChange = (e) => {
    const value = e.target.value
    setMovie({...movie, [e.target.name] : value} ) /// передаем изменение состоний в инпутах с помощью свойства в инпуте Name
  }







  //// смотри firebase / docs / build / web
  const upload = (items) => {
      items.forEach((item) => {
        const fileName = new Date().getTime() + item.label + item.file.name
        const uploadTask = storage.ref(`/items/${fileName}`).put(item.file)//// создаем ссылку для Firebase, на наш файл который мы загружаем

        uploadTask.on("state_changed", (snapshot) => { ///// отслеживаем состояние загрузки
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is" + progress + "% done.")
        },
            /// обработка неудачных загрузок
                (err) => { console.log(err) },() => {


              uploadTask.snapshot.ref.getDownloadURL().then( (url) => {
                setMovie((prev) => {return {...prev, [item.label]: url}})  /// отправляем ссылку на файл
                setUploaded((prev) => prev + 1) //// доходим до 5 файлов и будет доступна кнопка create // смотри условие с кнопкой Create/upload внизу этого документа
              })
            }
            )
      })
  }



  const handleUpload = (e) => {
    e.preventDefault() /// удаляем первоначальное состояние
    upload([
      {file:img, label:"img"},
      {file:imgTitle, label:"imgTitle"}, ///// изменяем состояния с файлами
      {file:imgSm, label:"imgSm"},
      {file:trailer, label:"trailer"},
      {file:video, label:"video"},
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createMovie(movie,dispatch )  //// отправляем готовое состояние для создания фильма
  }


  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
              onChange={(e) => setImg(e.target.files[0])}/// передаем полученные файлы в состояние, [0] означает что только 1 файл будет загружен
              type="file" id="img" name={'img'}/>
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input
              onChange={(e) => setImgTitle(e.target.files[0])}/// передаем полученные файлы в состояние, [0] означает что только 1 файл будет загружен
              type="file" placeholder="ImgTitle" name={'imgTitle'} />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input
              onChange={(e) => setImgSm(e.target.files[0])}/// передаем полученные файлы в состояние, [0] означает что только 1 файл будет загружен
              type="file" id="ImgSm" name={'imgSm'}/>
        </div>

        <div className="addProductItem">
          <label>Title</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="John Wick"
              name={'title'}/>
        </div>

        <div className="addProductItem">
          <label>Description</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Description"
              name={'desc'}/>
        </div>

        <div className="addProductItem">
          <label>Year</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Year"
              name={'year'}/>
        </div>

        <div className="addProductItem">
          <label>Genre</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Genre"
              name={'genre'}/>
        </div>

        <div className="addProductItem">
          <label>Duration</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Duration"
              name={'duration'}/>
        </div>

        <div className="addProductItem">
          <label>Limit</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Limit"
              name={'limit'}/>
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select
              onChange={handleChange}
              name="isSeries"
              id="isSeries">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
          <div className="addProductItem">
            <label>Trailer</label>
            <input
                onChange={(e) => setTrailer(e.target.files[0])}/// передаем полученные файлы в состояние, [0] означает что только 1 файл будет загружен
                type="file" name={'trailer'}/>
          </div>

          <div className="addProductItem">
            <label>Full Video</label>
            <input
                onChange={(e) => setVideo(e.target.files[0])}/// передаем полученные файлы в состояние, [0] означает что только 1 файл будет загружен
                type="file" name={'video'}/>
          </div>

        {uploaded === 5 ?(
            <button
                onClick={handleSubmit}
                className="addProductButton">Create</button>
        )
        :
          (
              <button
                  onClick={handleUpload}
                  className="addProductButton">Upload</button>
          )}

      </form>
    </div>
  );
}

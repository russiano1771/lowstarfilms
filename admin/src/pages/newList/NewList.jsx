import "./NewList.css";
import {useContext, useEffect, useState} from "react";
import storage from '../../FireBase'
import {MovieContext} from "../../context/movieContext/MovieContext";
import {createMovie, getMovies} from "../../context/movieContext/ApiCalls";
import {ListContext} from "../../context/listContext/ListContext";
import {createList} from "../../context/listContext/ApiCalls";
import {useHistory} from 'react-router-dom'

export default function NewList() {
  const [list, setList] = useState(null)
  const history = useHistory()
  const {dispatch} = useContext(ListContext)
  const {movies, dispatch: dispatchMovie} = useContext(MovieContext)

  useEffect(() => {
    getMovies(dispatchMovie)
  }, [dispatchMovie])

  const handleChange = (e) => {
    const value = e.target.value
    setList({...list, [e.target.name] : value} ) /// передаем изменение состоний в инпутах с помощью свойства в инпуте Name
  }



  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value) //// получаем конкретное содержимое(id, genre и тд) из массива с фильмами, а не html collection
    setList({...list, [e.target.name] : value} )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    createList(list, dispatch)
    history.push('/lists')

  }
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">

        <div className="formLeft">


        <div className="addProductItem">
          <label>Title</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Популярные новинки"
              name={'title'}/>
        </div>

        <div className="addProductItem">
          <label>Genre</label>
          <input
              onChange={handleChange}
              type="text"
              placeholder="Description"
              name={'genre'}/>
        </div>

        <div className="addProductItem">
          <label>Type</label>
          <select name="type" onChange={handleChange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
        </div>
        <div className="formRigth">


        <div className="addProductItem">
          <label>Content</label>
          <select
              style={{height:"300px"}}
              multiple name="content" onChange={handleSelect}>
            {movies.map((movie) =>(
            <option key={movie._id} value={movie._id}>{movie.title}</option>
                )
            )}
          </select>
        </div>

            <button
                onClick={handleSubmit}
                className="addProductButton">Create</button>

        </div>
      </form>
    </div>
  );
}

import { useState, useEffect } from 'react';
import Axios from 'axios';
import './addReview.css';


function AddReview() {

    const [movieName,setMovieName] = useState('');
    const [review,setReview] = useState('');
    const [movieList,setMovieList] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:4567/api/get').then((response)=> setMovieList(response.data));
    },[])

    const submitReview = () => {
        Axios.post("http://localhost:4567/api/insert",{
            movie_name : movieName,
            movie_review : review
        });
        
            setMovieList([
                ...movieList, {movie_name: movieName, movie_review:review}
            ]);
    }

    return (
        <div>
        <div>
            <h1>CRUD APPLICATION</h1>
        </div>
        <div className = 'form'>
            <label>MOVIE NAME:</label>
            <input type="text" name="movieName" onChange = {(e)=> {
                setMovieName(e.target.value)
            }} />
            <label>DESCRIPTION:</label>
            <input type="text" name="movieReview" onChange = {(e)=> {
                setReview(e.target.value)
            }}/>
            <button onClick = {submitReview}>Submit</button>

            {movieList.map((val)=>{
                return <h1>Movie Name: {val.movie_name} | Movie Review: {val.movie_review}</h1>
            })}
        </div>
        </div>
    )
}

export default AddReview

import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MovieList from './components/MovieList';
const api_key='12f7113b'; 
const url = `https://www.omdbapi.com/?apikey=${api_key}`;

function Form(props){
  const {action} =props;
  const [title,setTitle] =useState('');
  
  const handlerClick=()=>{
     //запрос на сервер по параметру Title
     action(title);
  }
  return(
    <div>
      <input type="text" onChange={(e)=>{setTitle(e.target.value)}} />
      <button onClick={handlerClick}>Найти</button>
    </div>

  )
}
function App() {
  const [result,setResult]=useState([])
  const MovieResult=(title)=>{
      axios.get(`${url}&s=${title}`)
      .then(function (response) {
        // обработка успешного запроса
        console.log(response.data.Search);
        setResult(response.data.Search);
      })
      .catch(function (error) {
        // обработка ошибки
        console.log(error);
      })
  }
  return (
    <div className="container">
     <h1>Cinema</h1>
     <Form action={(title)=>MovieResult(title)}/>
     <MovieList result={result}/>
      
    </div>
  );
}

export default App;

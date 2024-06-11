//Form.jsx
import React,{useState} from 'react';
import './Form.css'
function Form(props){
    let{action} =props
    let [val, setVal]=useState('');
    let [error, setError]=useState('');
    let [valid, setValid]=useState(false);

    const isValid=(str)=>{
        let reg = /^\w/;      
       return(str.length>=3&&reg.test(str))
    }

    const handlerChange=(event)=>{
        setVal(event.target.value)
        setValid(isValid(event.target.value));
        setError('');
    }
    const handlerSubmit=(event)=>{
        event.preventDefault();
    }
    const handlerClick=(val)=>{
        //передали данные             
        if(valid){
            const [name,lastname] = val.split(' ');       
            action({name, lastname}); 
            setVal('');
         }
         else{
            setError('Данные не валидные, необходимо использовать только тексти пробел')
         }

       

        //  const [name,lastname] = val.split(' ');       
        //     action({name, lastname}); 
        //     setVal('');
       
    }
    return(
        <div className="form-container">
            <form onSubmit={handlerSubmit} className="d-flex justify-content-between"> 
                {/* <p>{val}</p> */}
                <input className="form-control"  onChange={handlerChange} type="text" value={val} />
                <button className="btn btn-primary ml-5" onClick={()=>handlerClick(val)} type="submit">Добавить</button>
            </form>
            <p>{error}</p>
        </div>
    )
}
export default Form;
//Form.jsx
import React,{useState} from 'react';
import './Form.css'
function Form(props){
    let{action} =props
    let [val, setVal]=useState('');
    const handlerChange=(event)=>{
        setVal(event.target.value)
    }
    const handlerSubmit=(event)=>{
        event.preventDefault();
    }
    const handlerClick=(val)=>{
        //передали данные
        console.log(val);
        const [name,lastname] = val.split(' ');
        //aaaa bbbbb ['aaaa','bbbbb']
        // [name,lastname]= ['aaaa','bbbbb']
        action({name, lastname});
        setVal('');
    }
    return(
        <div className="form-container">
            <form onSubmit={handlerSubmit}>
                <p>{val}</p>
                <input onChange={handlerChange} type="text" value={val} />
                <button onClick={()=>handlerClick(val)} type="submit">Добавить</button>
            </form>
        </div>
    )
}
export default Form;
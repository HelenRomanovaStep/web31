//DirectorList.jsx
import React, {useState,useEffect} from 'react';
import './Director.css';
import Director from './Director.jsx';
import Form from './Form.jsx';

let directors=[
   {
    id: 1,
    name: 'Alfred',
    lastname: 'Hitchcock' 
   },
   {
    id:2,
    name: 'Ingmar',
    lastname:  'Bergman'
   },
   {
    id:3,
    name: 'Stanley',
    lastname:  'Kubrick'
   } ,
   {
    id:4,
    name: 'Federico',
    lastname:  'Fellini'
   },
   {
    id:5,
    name: 'Steven',
    lastname:  'Spielberg'
   } 
]

function DirectorList(){
    let [directorList,setDirectorList]=useState(JSON.parse(localStorage.getItem('dir')));
    useEffect(()=>{
        console.log(directorList.length);        
        localStorage.setItem('dir',JSON.stringify(directorList))
    },[directorList])
   
    const add=(newDirector)=>{      
        let id = directorList.length +1;
        newDirector = {
            id: id,
            ...newDirector 
        }
     
        setDirectorList([...directorList,newDirector])
    }

    const remove=(id)=>{
        setDirectorList(directorList=>directorList.filter(el=>el.id!==id))
    }
    return(
        <div className="director">
            <Form action={add}/>
             <ul className="list">
              { directorList.map(director=>
                <Director key={director.id}              
                    {...director}
                    action={()=>remove(director.id)}
                 />
                )
              }        
             </ul>
        </div>
    )
}
export default DirectorList;
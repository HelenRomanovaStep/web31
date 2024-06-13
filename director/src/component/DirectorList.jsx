//DirectorList.jsx
import React, {useState,useEffect,useReducer} from 'react';
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

function reducer(directorList,action){
    
  if (action.type=='remove'){return directorList.filter(el=>el.id!==action.id)}
   
  if (action.type=='add') {return [...directorList,{
    id: action.id,
    ...action.newDirector
   }]}
}
function DirectorList(){
    const [directorList,dispatch]=useReducer(
        reducer,
        localStorage.getItem('dir').length==0
           ? JSON.parse(localStorage.getItem('dir'))
          :directors )


    // let [directorList,setDirectorList]=useState(
    //        localStorage.getItem('dir').length==0
    //        ? JSON.parse(localStorage.getItem('dir'))
    //        :directors
    //     );    
    useEffect(()=>{
        console.log(directorList);  
        console.log('max=',directorList.reduce((max,item)=>max.id>item.id?max.id:item.id,directorList[0]?.id||0));      
        localStorage.setItem('dir',JSON.stringify(directorList))
    },[directorList])
   
    // const add=(newDirector)=>{      
    //     let id = directorList.reduce((max,item)=>max.id>item.id?max.id:item.id,directorList[0]?.id||0)+1;
    //     newDirector = {
    //         id: id,
    //         ...newDirector 
    //     }
     
    //     //setDirectorList([...directorList,newDirector])
    // }

    // const remove=(id)=>{
    //     //setDirectorList(directorList=>directorList.filter(el=>el.id!==id))
    // }


    return(
        <div className="director">         
            <Form action = {(newDirector)=>dispatch(
                {
                type: 'add',
                newDirector: newDirector,
                id:  directorList.reduce((max,item)=>max.id>item.id?max.id:item.id,directorList[0]?.id||0)+1
               }
            )}  /> 
             <ul className="list">
              { directorList.map(director=>
                <Director key={director.id}              
                    {...director}                    
                    action={()=>dispatch({
                        type: 'remove',
                        id: director.id
                        })
                    }
                 />
                )
              }        
             </ul>
        </div>
    )
}
export default DirectorList;
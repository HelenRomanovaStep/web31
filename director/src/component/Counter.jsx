import React,{useReducer} from 'react';
function dec(delta){
    return{                
        type:'dec',
        delta: delta
       }
}
function inc(delta){
    return{
        type: 'inc',
        delta: delta
    }
}

function reducer(count,action){
    console.log('action=',action);
    //action= {                
    //     type:'dec',
    //     delta: 1
    //    }
    if (action.type=='dec'){return  count - action.delta}
    if (action.type=='inc'){return  count + action.delta}
     
}
export default function Counter(){
    const [count,dispatch]=useReducer(reducer,0);

    return(
        <div className="jumbotron d-flex justify-content-center gap-2">
            <button onClick={()=>dispatch(dec(1))} 
               className="btn btn-info">-</button>
            <button onClick={()=>dispatch(dec(2))}
                className="btn btn-success">--</button>

            <h3>{count}</h3>
            
            <button onClick={()=>dispatch(inc(1))}
               className="btn btn-info">+</button>

            <button onClick={()=>dispatch(inc(2))}
              className="btn btn-success">++</button>


        </div>
    )
}
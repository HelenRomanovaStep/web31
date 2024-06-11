//Director.jsx
function Director(props){    
    let {name,lastname,action} =props
    return(
        <li>
            <span>{name} {lastname}</span> 
            <i onClick={action} className="bi bi-trash3-fill text-danger"></i>
        </li> 
    )
}
export default Director;
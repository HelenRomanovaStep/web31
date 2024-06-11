//Director.jsx
function Director(props){    
    let {name,lastname} =props
    return(
        <li>
            {name} {lastname}
        </li> 
    )
}
export default Director;
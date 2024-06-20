//MovieList.jsx
import Movie from './Movie';
export default function MovieList(props){
    const {result} = props;
    console.log('result=> ',result);
    return(
        <section>
            <h1>Смотреть</h1>
            <div className="row gap-5">
                {
                    result?.map((item,i)=><Movie key={i} {...item} />)
                    
                }
               
                
            </div>
        </section>
       
    )
}
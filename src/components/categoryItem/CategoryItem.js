import { Link } from 'react-router-dom';
import './CategoryItem.css'


function CategoryItem({
    idCategory,
    strCategory,
    strPrice,
    strCategoryThumb,
    strCategoryDescription,
}){
    return(
        <div className="card">
            <img src={strCategoryThumb} alt={strCategory} />
            <h4>{strCategoryDescription.slice(0, 80)}...</h4>
            <p>{strPrice}</p>

            <div className="card-action">
                <Link to={`/category/${strCategory}`}>Watch category</Link>    
            </div>
        </div>
    )
}

export default CategoryItem;

//создаем в json еще один объект и с подробными фотками по объекту
//и скорее всего по id если id 1 = id 1 в новом объекте по показывать фотки каруселью + карусель из бутстрап   
//что был переход необходимо что бы в strcategory соответствовал объекту на json c таким же str cat где будет распологаться болле 5 фото каруселью
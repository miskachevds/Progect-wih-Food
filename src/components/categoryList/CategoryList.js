import './CategoryList.css';
import CategoryItem from '../categoryItem/CategoryItem';

function CategoryList({catalog = []}){
    return(
        <div className="list">
            {
                catalog.map(el => (
                    <CategoryItem key={el.id}{...el}/>
                ))
            }
        </div>
    )
}

export default CategoryList;
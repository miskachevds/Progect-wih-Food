import './CategoryItem.css'

function CategoryItem({
    id,
    title,
    thumbnailUrl,
}){
    return(
        <div className="card">
            <img src={thumbnailUrl} alt="" />
            <h4>{title}</h4>
        </div>
    )
}

export default CategoryItem;
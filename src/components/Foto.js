
function Foto({idCategory,strCategory,strPrice,strCategoryThumb,strCategoryDescription}) {
    return (
        <div className="card">
            <img src={strCategoryThumb} alt={strCategory} />
            <h1>{strCategoryDescription}</h1>
        </div>
    )
}

export default Foto;
function Foto({idCategory,strcategory,strPrice,strCategoryThumb,strCategoryDescription}) {
    return (
        <div className="card">
            <img src={strCategoryThumb} alt="" />
            <h1>{strCategoryDescription}</h1>
        </div>
    )
}

export default Foto;
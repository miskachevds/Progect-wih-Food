import Foto from "./Foto";

function FotoList({allCat}){
    return(
        <div className="list">
            {
                allCat.map(item => (
                    <Foto key={item.idCategory} {...item} />
                ))
            }
        </div>
    )
}

export default FotoList;
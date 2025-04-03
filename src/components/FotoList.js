import Foto from "./Foto";

function FotoList({allCat}){//принимаем пропс 
    return(
        <div className="list">
            {
                allCat.map(item => (//метод map для перебора массива allcat,для каждого эл item в массиве создается Foto
                    <Foto key={item.idCategory} {...item} />//ключ key={item.idCategory} это уник ключ для каждого эл списка кот помогает react оптимизировать процесс рендеринга
                )) //...item это синтк распространения кот,передает все свойства объекта item как отдельные пропсы в компонент Foto
            }
            
            {
                allCat.strYoutube ? (<div>
                    <h4>Video flet</h4>
                    <div className="video-wrap">
                    <iframe src="" title="YouTube video player" frameborder="0" ></iframe>
                    </div>
                    </div>) : null
            }
        </div>
        
    )
}

export default FotoList;
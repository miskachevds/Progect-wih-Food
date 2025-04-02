import Foto from "./Foto";

function FotoList({allCat}){//принимаем пропс 
    return(
        <div className="list">
            {
                allCat.map(item => (//метод map для перебора массива allcat,для каждого эл item в массиве создается Foto
                    <Foto key={item.idCategory} {...item} />//ключ key={item.idCategory} это уник ключ для каждого эл списка кот помогает react оптимизировать процесс рендеринга
                )) //...item это синтк распространения кот,передает все свойства объекта item как отдельные пропсы в компонент Foto
            }
        </div>
    )
}

export default FotoList;
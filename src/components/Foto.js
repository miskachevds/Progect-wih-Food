import "./Foto.css";

function Foto({ strCategoryThumb }) {//просунули пропс с фото
    return (
        <div className="foto">
            {Array.isArray(strCategoryThumb) ? (//если strCatThumb массив,то 
                strCategoryThumb.map((thumb, index) => (//перебираем каждый эл массива map,+уник названия thumb b index
                    <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} />//созд тег img  куда перед изоб src={thumb}
                ))
            ) : (
                <img src={strCategoryThumb} alt="Thumbnail" />//если не массив передаем одно изображение=просто пропс
            )}
        </div>
    );
}

export default Foto;

//здесь необходимо вывести около 5 фото и наилучшим образом это будет через слайдер
//самое правильное удет использовать метод map
//скорее всего здесь так же нужно создать еще один компонент,например details и 
//здесь уже перебирать методом map?
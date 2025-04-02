import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import FotoList from "../../components/FotoList";
import Preloader from "../../components/preloader/Preloader";
import './Category.css'

function Category() {
    const { name } = useParams();//извлекает name из url

    const [allCat, setAllCat] = useState([]);

    const [filteredCat, setFiltederCat] = useState([]);

    const navigate = useNavigate();
    let goBack = () => navigate(-1);

    useEffect(() => {
        fetch('http://localhost:3001/allСategories')
            .then(response => response.json())//после получ ответа от сер он преобр в формат json
            .then(data => { //после преобз в json данные сохр в сост ком setAllCat,это позв комп иметь доступ по всем категориям
                setAllCat(data) // фильтруем данные по strCategory
                const filtred = data.filter(item => item.strCategory === name);//метод filter созд новый массив.Фильтруются кат у кот strCategory совпадает с пере name получ из url(через useParams)
                setFiltederCat(filtred);//сохранение отф
            })
    }, [name]);

    console.log(filteredCat)

    return (
        <div className="wrap">
            {
                !filteredCat.length ? <Preloader /> : <FotoList allCat={filteredCat} />//просунули пропсы под назв allcat
            }
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    )
}

export default Category;
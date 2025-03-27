import { useEffect, useState } from "react";
// import Preloader from '../../components/preloader/Preloader';
// import CategoryList from "../../components/categoryList/CategoryList";
// import { data } from "react-router-dom";
import { getAllCategories } from "../../api";
import { data } from "react-router-dom";

function Photos() {
    // const [catalog, setCatalog] = useState([]);

    // useEffect(() => {
    //     getAllCategories().then(data => {
    //         setCatalog(data.categories);
    //     })
    // }, []);
    // console.log(catalog);
    let [catalog, setCatalog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/categories')
        .then(response => response.json())
        .then(data => setCatalog(data))
    },[])

    return (
        <div className="wrap">
            Hello Dimas
            {catalog.length > 0 ? (
            catalog.map((item, index) => (
                <h1 key={index}>{item.strCategoryDescription}</h1>
            ))
        ) : (
            <h1>Загрузка...</h1>
        )}
        </div>
    )
}

export default Photos;



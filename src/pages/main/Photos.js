import { useEffect, useState } from "react";
import Preloader from '../../components/preloader/Preloader';
import CategoryList from "../../components/categoryList/CategoryList";
// import { data } from "react-router-dom";
// import { getAllCategories } from "../../api";

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
        console.log(catalog)
    return (
        <div className="wrap">
            {/* {catalog.length > 0 ? (
            catalog.map((item, index) => (
                <h1 key={index}>{item.strCategoryDescription}</h1>
            ))
        ) : (
            <h1>Загрузка...</h1>
        )} */}
            {
                !catalog.length ? <Preloader /> : <CategoryList catalog={catalog}/>
            }
        </div>
    )
}

export default Photos;


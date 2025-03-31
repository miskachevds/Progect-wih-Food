import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FotoList from "../../components/FotoList";
import Preloader from "../../components/preloader/Preloader";

function Category(){
    const {name} = useParams();

    const [allCat, setAllCat] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/allСategories')
        .then(response => response.json())
        .then(data => setAllCat(data))
    },[name]);

    console.log(allCat)

    return(
        <div className="wrap">
            {
                !allCat.length ? <Preloader /> : <FotoList allCat={allCat} /> 
            }
        </div>
    )
}

export default Category;
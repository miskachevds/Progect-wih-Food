import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

        </div>
    )
}

export default Category;
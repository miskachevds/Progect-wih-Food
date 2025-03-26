import { useEffect, useState } from "react";
import Preloader from '../../components/preloader/Preloader';
import CategoryList from "../../components/categoryList/CategoryList";
// import { getAllPhotos } from "../../api";

function Photos(){
//     const [catalog, setCatalog] = useState([])

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/photos')
//         .then(response => response.json())
//         .then(data => setCatalog(data))
//         // console.log(catalog);
//     })
//     // const [catalog, setCatalog] = useState([])

    // useEffect(() => {
    //     getAllPhotos().then(data => {
    //         setCatalog(data)
    //     })
    // },[]);

    // console.log(catalog);

    return(
        <div className="wrap">
            Hello
        </div>
    )
}

export default Photos;



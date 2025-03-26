import { useEffect, useState } from "react";
import Preloader from '../../components/preloader/Preloader';
import CategoryList from "../../components/categoryList/CategoryList";
// import { getAllPhotos } from "../../api";

function Photos(){

//     // const [catalog, setCatalog] = useState([])

    // useEffect(() => {
    //     getAllPhotos().then(data => {
    //         setCatalog(data)
    //     })
    // },[]);

    // console.log(catalog);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/categories')
        } catch (erros) {

        }
    }

    return(
        <div className="wrap">
            Hello
        </div>
    )
}

export default Photos;



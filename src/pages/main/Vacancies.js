import { useEffect, useState } from "react";
import { getAllVacancies } from "../../api";

function Vacancies(){
    const[catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllVacancies().then(data => {
            setCatalog(data.vacancies)
        })
    },[]);

    console.log(catalog)

    return(
        <div className="wrap">
            <h2>Здесь будет вся Api вакансий</h2>
        </div>
    )
}

export default Vacancies;
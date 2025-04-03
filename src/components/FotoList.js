import Foto from "./Foto";

function FotoList({ allCat }) {
    return (
        <div className="list">
            {
                allCat.map(item => (
                    <Foto key={item.idCategory} {...item} />
                ))
            }
            {
                allCat.map(item => (
                    item.strYoutube ? (//если видео есть то показываем
                        <div key={item.idCategory}>
                            <h4>Видео презентация</h4>
                            <div className="video-wrap">
                                <iframe title="Video" src={`https://www.youtube.com/
                                embed/${item.strYoutube.slice(-11)}`}
                                frameborder="0" allowFullScreen></iframe>
                            </div>
                        </div>
                    ) : null
                ))
            }
        </div>
    );
}

export default FotoList;
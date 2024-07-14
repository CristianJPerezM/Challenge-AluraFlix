import { useParams } from "react-router-dom";
import Titulo from "../../components/Titulo";
import styles from "./Player.module.css"
import videos from "../../components/data/db.json";
import NotFound from "../NotFound";

function Player(){
    const parametros = useParams()
    const video = videos.find(video => video.id === Number(parametros.id));
    if(!video) return <NotFound/>

    return(
        <>
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
            <iframe width="100%" height="100%" 
            src={video.link} 
            title={video.titulo} 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </>
    )
}

export default Player;
import styles from "./index.modules.css";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useEffect, useState } from "react";

function Inicio() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
    fetch(
        "https://my-json-server.typicode.com/CristianJPerezM/Challenge-AluraFlix/videos"
    )
        .then((response) => response.json())
        .then((data) => {
        setVideos(data);
        }, []);
    });
    return (
    <>
        <Titulo>
        <h1>Tus videos-soundtrack </h1>
        </Titulo>
        <section className={styles.container}>
        {videos.map((video) => {
            return <Card {...video} key={video.id} />;
        })}
        </section>
    </>
    );
}

export default Inicio;

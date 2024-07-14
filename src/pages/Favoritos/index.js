import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import { useFavoritosContext } from "../../context/Favoritos";
import styles from "./Favoritos.module.css";

function Favoritos() {
    const { favorito } = useFavoritosContext();

    return (
    <>
        <Titulo>
        <h1>Mis videos-soundtrack favoritos</h1>
        </Titulo>
        <section className={styles.container}>
        {favorito.map((fav) => {
            return <Card {...fav} key={fav.id} />;
        })}
        </section>
    </>
    );
}

export default Favoritos;

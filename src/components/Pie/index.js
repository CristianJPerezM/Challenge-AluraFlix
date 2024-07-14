import styles from "./Pie.module.css"
import logo from "../Cabecera/aluraflix.png"

function Pie(){
    return(
        <footer className={styles.rodape}>
            <section className={styles.container}>
                <img src={logo} alt="AluraFlix"/>
            </section>
        </footer>
    )
}

export default Pie;
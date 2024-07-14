import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./aluraflix.png"
import CabeceraLink from "../CabeceraLink/CabeceraLink."


function Cabecera(){
    return(
        <header className={styles.cabecera}>
            <Link to="/">
            <section className={styles.container}>
                <img src={logo} alt="AluraFlix"/>
            </section>
            </Link>
            <nav>
                <CabeceraLink url="./">
                    Home
                </CabeceraLink>
                <CabeceraLink url="./Favoritos">
                    Favoritos
                </CabeceraLink>
                <CabeceraLink url="./Nuevo_Video">
                    Nuevo Video
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera;
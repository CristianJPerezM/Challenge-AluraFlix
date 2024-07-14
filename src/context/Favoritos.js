import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favoritos";

export default function FavoritoProvider({ children }) {
    const [favorito, setFovorito] = useState([]);

    return (
    <FavoritosContext.Provider value={{ favorito, setFovorito }}>
        {children}
    </FavoritosContext.Provider>
    );
}

export function useFavoritosContext() {
    const { favorito, setFovorito } = useContext(FavoritosContext);

    function agregarFavorito(nuevoFavorito) {
    const favoritoRepetido = favorito.some(
        (item) => item.id === nuevoFavorito.id
    );
    
    let nuevaLista = [...favorito];
    if (!favoritoRepetido) {
        nuevaLista.push(nuevoFavorito);
        return setFovorito(nuevaLista);
    }

    nuevaLista = favorito.filter((item) => item.id !== nuevoFavorito.id);
    return setFovorito(nuevaLista);
    }
    return { favorito, agregarFavorito };
}

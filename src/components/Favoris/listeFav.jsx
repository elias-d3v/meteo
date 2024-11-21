import { addFav, removeFav } from "../../features/favoris/favorisSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function ListeFav() {
  // Hook permettant le suivi de l'état global favoris
  const favoris = useSelector((state) => state.favoris);
  // Hook permettant l'utilisation des fonctions du favorisSlice
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(favoris);
  }, [favoris]);

  return (
    <>
      <h2>Liste des favoris</h2>
      <ul>
        {/* favoris étant un objet contenant un tableau on itère sur favoris.favoris */}
        {favoris.favoris.map((fav) => (
          <div key={fav}>
            <li>
              {/* Lien renvoyant aux prévisions des 14 prochains jours */}
              <Link to={`/details/${fav.insee}`}>{fav.name} {" CP : "} {fav.cp}</Link>{" "}
              {/* Bouton de suppression des favoris */}
              <button onClick={() => dispatch(removeFav(fav))}>X</button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

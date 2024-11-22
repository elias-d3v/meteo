import { removeFav } from "../../features/favoris/favorisSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
      <h2 className="text-center">Liste des favoris</h2>
      <ul className="text-center">
        {/* favoris étant un objet contenant un tableau on itère sur favoris.favoris */}
        {favoris.favoris.map((fav) => (
          <div key={fav}>
            <li>
              {/* Lien renvoyant aux prévisions des 14 prochains jours */}
              <Link to={`/details/${fav.insee}`}>{fav.name} {" CP : "} {fav.cp}</Link>{" "}
              {/* Bouton de suppression des favoris */}
              <Button className="bg-danger" type="button" onClick={() => {console.log('ok'); dispatch(removeFav(fav))}}>X</Button>
              {/* <button onClick={() => {console.log('ok'); dispatch(removeFav(fav))}}>X</button>   */}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

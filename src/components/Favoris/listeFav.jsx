export function ListeFav() {
    // On parse le localstorage car les infos sont stockés sous forme de chaine de caractères
    const favoris = JSON.parse(localStorage.getItem("favoris")) || [];
    console.log(favoris);
  
    return (
      <>
        <h2>Liste des favoris</h2>
        <ul>
          {favoris.map((fav, index) => (
            <div key={index}>
              <li>{fav}</li>
            </div>
          ))}
        </ul>
      </>
    );
  }

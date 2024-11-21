export function Home()
{
    localStorage.removeItem("favoris");
    console.log(localStorage);
    return(<h1>Appli météo</h1>)
}
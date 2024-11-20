    import {useEffect, useState} from 'react'
    import { Link } from 'react-router-dom'
    import axios from 'axios'
    import { SearchForm } from '../SearchForm/SearchForm';

    export function Meteo()
    {
        const [data, setData] = useState([]);
        // variable qui changera en fonction de l'entrée utilisateur. Paris par défaut pour éviter les erreurs au chargement de la page
        const [ville, setVille] = useState('Paris');
        useEffect(() => {
            const fetchWeather = async () => {
                try{ 
                    const res = await axios.get(
                        'https://api.meteo-concept.com/api/location/cities',
                        {
                            params: {
                            token: 'c7b2f341dd0f28256e0b32278ad71f1e1b1f40e9d8126f625ce9ee193011b9e4', // Mettre le token en variable d'environnement pour plus de sécurité ?
                            // clef search dynamique dont la valeur dépend de l'entrée utilisateur dans la barre de recherche
                            search: ville,
                            },
                        }
                    );
                    console.log(res.data);
                    // On récupère uniquement les éléments cities de la response
                    setData(res.data.cities);
                }catch(err)
                {
                    console.log(err);
                };
            }
                fetchWeather();
                
        }, [ville]) // Elément ville chargé dans le tableau de dépendance puisqu'il sera amené à changer
        console.log(data);
        // Fonction de gestion de la recherche. On récupère l'entrée utilisateur et on met à jour la ville recherché. L'élément ville étant modifié et chargé dans le tableau de dépendances, useEffect se met à jour et fetchWeather fait une nouvelle requête à l'API
        const handleSearch = (userInput) => {
            setVille(userInput);
        }

        return(
            <>
                {/*
                    onSearch est une props qui est passée au component SearchForm et sera appellée lors de la soumission du formulaire par l'utilisateur
                */}
                <SearchForm onSearch={handleSearch}/>
                <h1>Résultat de la recherche</h1>
                <ul>
                    {/*
                        Affichage du contenu de la requête
                        Utilisation de .map() au lieu de foreach() dans un return, le foreach exécutant seulement des actions et ne retournant rien
                    */ }
                { data.map(
                    (city) => <Link to={`/details/${city.insee}`} ><li key={city.insee}>{city.name}</li> </Link> 
                )} 
                </ul>
            </>

        )

    }
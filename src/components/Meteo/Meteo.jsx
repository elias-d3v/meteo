import {useEffect, useState} from 'react'
import axios from 'axios'

export function Meteo()
{
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchWeather = async () => {
            try{ 
                const res = await axios.get(
                    'https://api.meteo-concept.com/api/location/cities',
                    {
                        params: {
                        token: 'c7b2f341dd0f28256e0b32278ad71f1e1b1f40e9d8126f625ce9ee193011b9e4', // Mettre le token en variable d'environnement pour plus de sécurité ?
                        search: 'Paris',
                        },
                    }
                );
                console.log(res.data);
                setData(res.data.cities);
            }catch(err)
            {
                console.log(err);
            };
        }
            fetchWeather();
            
    }, [])
    console.log(data);
    return(
        <>
            <h1>Résultat de la recherche</h1>
            <ul>
                {/*
                    Affichage du contenu de la requête
                    Utilisation de .map() au lieu de foreach() dans un return, le foreach exécutant seulement des actions et ne retournant rien
                */ }
            { data.map(
                (city) => <li key={city.insee}>{city.name}</li>
            )} 
            </ul>
        </>

    )

}
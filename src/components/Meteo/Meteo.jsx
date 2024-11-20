import {useEffect, useState} from 'react'
import axios from 'axios'

export function Meteo()
{
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchWeather = async () => {
            try{
                // Récupère un objet city 
                const res = await axios.get(
                    'https://api.meteo-concept.com/api/location/cities',
                    {
                        params: {
                        token: 'd9c5d2afc445a103f8dbf3e847896c5514b01931b30f0cd9beb9de78c4a0c02c',
                        search: 'Paris',
                        },
                    }
                );
                console.log(res);
                setData(res.data);
            }catch(err)
            {
                console.log(err);
            };
        }
            fetchWeather()
    }, [])

    return(
        <>
            <h2>{data.name}</h2>
        </>

    )

}
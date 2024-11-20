import { Link } from 'react-router-dom'

export function Navbar(){
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="#">Méteo métropolitaine</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Accueil</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="meteo">Consulter la météo</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Pricing</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
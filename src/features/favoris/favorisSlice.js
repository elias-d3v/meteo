import { createSlice } from '@reduxjs/toolkit'

// Fonction de sauvegarde des favoris dans le localStorage
const saveToLocalStorage = (favoris) => {
    localStorage.setItem('favoris', JSON.stringify(favoris));
    
}

// Fonction de chargement des favoris depuis le localStorage
const loadFromLocalStorage = () => {
    const listFavoris = localStorage.getItem('favoris');
    // On vérifie que l'item favoris existe bien dans le localStorage, sinon on initialise un tableau vide
    return listFavoris ? localStorage.getItem('favoris') : [];
}

export const favorisSlice = createSlice({
    name: 'favoris',
    initialState: {
        // Tableau vide qui contiendra les villes ajoutées en favoris (qu'est-ce qu'on stocke ?  code INSEE semble le mieux)
        favoris: loadFromLocalStorage()
    },
    reducers: {
        // ajout d'une ville en favoris
        // action.payload représentant l'élément ajouté
        addFav: (state, action) => {
            state.value.push(action.payload);
            // On sauvegarde les valeurs dans le localStorage
            saveToLocalStorage(state.favoris);
            console.log("élément correctement ajouté au localStorage");
        },
        // Retire l'élément sélectionné du tableau des favoris
        removeFav: (state, action) => {
            state.favoris = state.favoris.filter(fav => fav !== action.payload);
            // On charge le nouveau tableau de favoris dans le localStorage
            saveToLocalStorage(state.favoris);
        }
    }
});

export const { addFav, removeFav } = favorisSlice.actions;

export default favorisSlice.reducer;
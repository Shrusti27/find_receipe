import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

    const [searchParam, setSearchParam] = useState([]);
    const [loading, setLoading] = useState(false);
    const [receipeList, setReceipeList] = useState([]);
    const [receipeDetails, setReceipeDetails] = useState(null);
    const [favouriteList, setFavouriteList] = useState([]);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();

            if (data?.data?.recipes) {
                setReceipeList(data?.data?.recipes)
                setLoading(false);
                setSearchParam("");
            }
        } catch (e) {
            console.log(e);
            setLoading(false);
            setSearchParam('');
        }
    }

    function handleAddtoFavourite(getCurrentItem) {
        console.log(getCurrentItem);
        let cpyFavouriteList = [...favouriteList];
        const index = cpyFavouriteList.findIndex(item => item.id === getCurrentItem.id);

        if (index === -1) {
            cpyFavouriteList.push(getCurrentItem)
        } else {
            cpyFavouriteList.splice(index);
        }
        setFavouriteList(cpyFavouriteList)
    }

    console.log(favouriteList, 'favouriteList');

    return (
        <GlobalContext.Provider value={{
            searchParam, loading, receipeList, setSearchParam,
            handleSubmit, receipeDetails, setReceipeDetails, handleAddtoFavourite, favouriteList
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

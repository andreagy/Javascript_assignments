'use strict';

document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const inputValue = document.querySelector('#input').value
    try {
        //const proxy = 'https://cors-anywhere.herokuapp.com/';
        const proxy = 'https://api.allorigins.win/get?url=';
        const search = 'https://api.tvmaze.com/search/shows?q='+ inputValue;
        const url = proxy + (search)
        console.log(url)
        const response = await fetch(url);
        if (!response.ok) throw new Error('Invalid input!');
        const json = await response.json();
        console.log('result', json);
    } catch (e) {
        console.log('error', e);
    }
});




function test(serie) {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=2274d6959460c5d8f97131e748ea99be&language=en-US&page=1&query=${serie}&include_adult=false`)
        .then(response => response.json())
        .then(characters => showCharacters(characters.results));

    showCharacters = characters => {
        const charactersDiv = document.querySelector('#rick-and-morty-characters');
        charactersDiv.innerHTML = '';
        characters.forEach(character => {
            const characterElement = document.createElement('p');
            characterElement.innerText = `Character Name: ${character.name}`;        
            charactersDiv.append(characterElement);
            const characterElement2 = document.createElement('img');
            characterElement2.src = 'https://image.tmdb.org/t/p/w500/' + character.poster_path;
            characterElement2.width = '100';
            //characterElement2.innerText = `Character Name: ${character.name}`;        
            charactersDiv.append('<h1>test</h1>');
        });
    }
}


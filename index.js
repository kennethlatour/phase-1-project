fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(resp => resp.json())
    .then(resp => console.log(resp))
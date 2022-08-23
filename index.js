fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(resp => resp.json())
    .then(data =>{
       data.drinks.forEach(drink =>{renderDrinks(drink)})
    })

    function renderDrinks(drink){
        let li = document.createElement('li')
        let list = document.querySelector('#nameList')

        li.textContent = drink.strDrink

        list.append(li)
    }
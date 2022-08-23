fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(resp => resp.json())
    .then(data =>{
       data.drinks.forEach(drink =>{renderDrinks(drink)})
       renderDrinkDetails(data.drinks[0])
    })

    function renderDrinks(drink){
        let li = document.createElement('li')
        let list = document.querySelector('#nameList')

        li.textContent = drink.strDrink

        list.append(li)

        li.addEventListener('click', ()=>{
            renderDrinkDetails(drink)
        })
    }

    function renderDrinkDetails(drink){
        const title = document.querySelector('#title')
        const img = document.querySelector('#img')
        const directions = document.querySelector('#directions')
        const ingredList = document.querySelector('#ingredients')
        const li = document.createElement('li')

        title.textContent = drink.strDrink
        img.src = drink.strDrinkThumb
        directions.textContent = drink.strInstructions





    }
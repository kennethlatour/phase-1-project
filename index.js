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
            document.getElementById("ingredients").innerHTML=""
            renderDrinkDetails(drink)
        })
    }

    function renderDrinkDetails(drink){
        const title = document.querySelector('#title')
        const img = document.querySelector('#img')
        const directions = document.querySelector('#directions')
        const li = document.createElement('li')

        title.textContent = drink.strDrink
        img.src = drink.strDrinkThumb
        directions.textContent = drink.strInstructions

        let inglist = document.getElementById("ingredients")
        let ing = document.createElement("li")

        const one = document.createElement('li')
        const two = document.createElement('li')
        const three = document.createElement('li')
        const four = document.createElement('li')
        const five = document.createElement('li')
        const six = document.createElement('li')
        const seven = document.createElement('li')
    
    
        ingr (drink.strIngredient1, drink.strMeasure1, one)
        ingr (drink.strIngredient2, drink.strMeasure2, two)
        ingr (drink.strIngredient3, drink.strMeasure3, three)
        ingr (drink.strIngredient4, drink.strMeasure4, four)
        ingr (drink.strIngredient5, drink.strMeasure5, five)
        ingr (drink.strMeasure6,drink.strIngredient6, six)
        ingr (drink.strMeasure7, drink.strIngredient7, seven)
        
        inglist.append(one, two, three, four, five, six, seven)

    }

    function ingr (ing, measurement, num) {
        if (ing === null) {num.textContent = ""}
         else if (measurement === null) {num.textContent = `${ing}`}    
            else {num.textContent = `${ing} ${measurement}`}
    }

document.getElementById(like).addEventListener('click',  )


    
fetch ('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(resp => resp.json())
    .then(data =>{
       data.drinks.forEach(drink =>{renderDrinks(drink)})
       renderDrinkDetails(data.drinks[0])
    })
    
// Adds names to the top of the page
    function renderDrinks(drink){
        let li = document.createElement('li')
        let list = document.querySelector('#nameList')

        li.textContent = drink.strDrink

        list.append(li)
//click event to render drink details to page
        li.addEventListener('click', ()=>{
            document.getElementById("ingredients").innerHTML=""
            document.getElementById("ingredients").textContent = 'Ingredients'
            renderDrinkDetails(drink)
        })
    }

// Renders details to page
    function renderDrinkDetails(drink){
        const title = document.querySelector('#title')
        const img = document.querySelector('#img')
        const directions = document.querySelector('#directions')
        
        title.textContent = drink.strDrink
        img.src = drink.strDrinkThumb
        directions.textContent = drink.strInstructions

        let inglist = document.getElementById("ingredients")
        const one = document.createElement('li')
        const two = document.createElement('li')
        const three = document.createElement('li')
        const four = document.createElement('li')
        const five = document.createElement('li')
        const six = document.createElement('li')
        const seven = document.createElement('li')

    //Callback function to add ingredients in a list
        ingr (drink.strIngredient1, drink.strMeasure1, one)
        ingr (drink.strIngredient2, drink.strMeasure2, two)
        ingr (drink.strIngredient3, drink.strMeasure3, three)
        ingr (drink.strIngredient4, drink.strMeasure4, four)
        ingr (drink.strIngredient5, drink.strMeasure5, five)
        ingr (drink.strIngredient6, drink.strMeasure6, six)
        ingr (drink.strIngredient7, drink.strMeasure7, seven)
        
        inglist.append(one, two, three, four, five, six, seven)
        const btn = document.querySelector('#like')

        btn.addEventListener('click', ()=> handleButton())
    }

//Handles the like button
    function handleButton(){
        const btn = document.querySelector('#like')
        if(btn.textContent=="Yummy"){
            btn.textContent="Not Yummy";}
        else if(btn.textContent=="Not Yummy"){
            btn.textContent="Yummy";}
    }

// Kenneth's magic function
    function ingr (ing, measurement, num) {
        if (ing === null) {num.textContent = ""}
         else if (measurement === null) {num.textContent = `${ing}`}    
            else {num.textContent = `${measurement} ${ing}`}
    }

// Submit form
const form = document.querySelector('#form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const commentLi = document.createElement('li')

    commentLi.textContent = e.target.comment.value

    document.querySelector('#commentHolder').append(commentLi)

    e.target.reset()
})

// Spicy Surprise
document.addEventListener('keydown', (e)=>{
   let key = e.key
    if (key === 'ArrowDown'){
        document.querySelector('#document').innerHTML = "<h1 id = 'drunk'>GO HOME YOU'RE DRUNK</h1>"
    }
})

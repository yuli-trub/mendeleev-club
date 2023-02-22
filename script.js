// API link

const API_BASE_URL = "https://api.api-ninjas.com/v1/cocktail";

const config = {
  headers: {
    "X-Api-Key": "7MCYWsrFWY8L4O10ctFbMA==ZksmoXT5k7sgV9Qe",
  },
};

// Laying out the table
const cocktailsTable = document.getElementById("cocktails");
console.log(cocktailsTable);

// RUM
axios
  .get(`${API_BASE_URL}/?ingredients=rum`, config)
  .then((response) => {
    console.log(response);
    getRumCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const rumSectionWrapper = document.createElement("section");
rumSectionWrapper.classList.add("rum");

const getRumCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("rum__mini-card");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("rum__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("h4");
    cocktailItemName.classList.add("rum__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("card__ingredients-wrap");

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("card__ingredients-list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("card__ingredient");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    rumSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(rumSectionWrapper);
  });
};

// TEQUILA

axios
  .get(`${API_BASE_URL}/?ingredients=tequila`, config)
  .then((response) => {
    console.log(response);
    gettequilaCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const tequilaSectionWrapper = document.createElement("section");
tequilaSectionWrapper.classList.add("tequila");

const gettequilaCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("tequila__mini-card");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("tequila__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("h4");
    cocktailItemName.classList.add("tequila__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("card__ingredients-wrap");

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("card__ingredients-list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("card__ingredient");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    tequilaSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(tequilaSectionWrapper);
  });
};

// GIN

axios
  .get(`${API_BASE_URL}/?ingredients=gin`, config)
  .then((response) => {
    console.log(response);
    getginCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const ginSectionWrapper = document.createElement("section");
ginSectionWrapper.classList.add("gin");

const getginCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("gin__mini-card");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("gin__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("h4");
    cocktailItemName.classList.add("gin__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("card__ingredients-wrap");

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("card__ingredients-list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("card__ingredient");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    ginSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(ginSectionWrapper);
  });
};

// VODKA

axios
  .get(`${API_BASE_URL}/?ingredients=vodka`, config)
  .then((response) => {
    console.log(response);
    getvodkaCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const vodkaSectionWrapper = document.createElement("section");
vodkaSectionWrapper.classList.add("vodka");

const getvodkaCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("vodka__mini-card");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("vodka__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("h4");
    cocktailItemName.classList.add("vodka__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("card__ingredients-wrap");

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("card__ingredients-list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("card__ingredient");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    vodkaSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(vodkaSectionWrapper);
  });
};

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
rumSectionWrapper.classList.add("alcohol");

const getRumCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("alcohol__mini-card");
    cocktailItem.classList.add("alcohol__mini-card--rum");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("alcohol__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("p");
    cocktailItemName.classList.add("alcohol__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name.toUpperCase()}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("ingredients");

    const ingredientsHeader = document.createElement("h4");
    ingredientsHeader.classList.add("ingredients__header");
    ingredientsHeader.innerText = `INGREDIENTS`;
    cardIngredientsWrap.appendChild(ingredientsHeader);

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("ingredients__list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("ingredients__item");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructionsHeader = document.createElement("h4");
    instructionsHeader.classList.add("card__instructions-header");
    instructionsHeader.innerText = `INSTRUCTIONS`;
    cardInstructionWrap.appendChild(instructionsHeader);

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    rumSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(rumSectionWrapper);

    // HOVER EVENT ---can do individually
    cocktailItem.addEventListener("mouseover", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-rum"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove("alcohol__mini-card--hovered-rum");
      }
      event.currentTarget.classList.add("alcohol__mini-card--hovered-rum");
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-rum"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove("alcohol__mini-card--hovered-rum");
      }
    });
  });
};

// TEQUILA

axios
  .get(`${API_BASE_URL}/?ingredients=tequila`, config)
  .then((response) => {
    console.log(response);
    getTequilaCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const tequilaSectionWrapper = document.createElement("section");
tequilaSectionWrapper.classList.add("alcohol");

const getTequilaCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("alcohol__mini-card");
    cocktailItem.classList.add("alcohol__mini-card--tequila");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("alcohol__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("p");
    cocktailItemName.classList.add("alcohol__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name.toUpperCase()}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("ingredients__wrap");

    const ingredientsHeader = document.createElement("h4");
    ingredientsHeader.classList.add("ingredients__header");
    ingredientsHeader.innerText = `INGREDIENTS`;
    cardIngredientsWrap.appendChild(ingredientsHeader);

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("ingredients__list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("ingredients__item");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructionsHeader = document.createElement("h4");
    instructionsHeader.classList.add("card__instructions-header");
    instructionsHeader.innerText = `INSTRUCTIONS`;
    cardInstructionWrap.appendChild(instructionsHeader);

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    tequilaSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(tequilaSectionWrapper);

    // HOVER EVENT ---can do individually
    cocktailItem.addEventListener("mouseover", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-tequila"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove(
          "alcohol__mini-card--hovered-tequila"
        );
      }
      event.currentTarget.classList.add("alcohol__mini-card--hovered-tequila");
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-tequila"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove(
          "alcohol__mini-card--hovered-tequila"
        );
      }
    });
  });
};

// GIN

axios
  .get(`${API_BASE_URL}/?ingredients=gin`, config)
  .then((response) => {
    console.log(response);
    getGinCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const ginSectionWrapper = document.createElement("section");
ginSectionWrapper.classList.add("alcohol");

const getGinCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("alcohol__mini-card");
    cocktailItem.classList.add("alcohol__mini-card--gin");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("alcohol__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("p");
    cocktailItemName.classList.add("alcohol__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name.toUpperCase()}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("ingredients__wrap");

    const ingredientsHeader = document.createElement("h4");
    ingredientsHeader.classList.add("ingredients__header");
    ingredientsHeader.innerText = `INGREDIENTS`;
    cardIngredientsWrap.appendChild(ingredientsHeader);

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("ingredients__list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("ingredients__item");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructionsHeader = document.createElement("h4");
    instructionsHeader.classList.add("card__instructions-header");
    instructionsHeader.innerText = `INSTRUCTIONS`;
    cardInstructionWrap.appendChild(instructionsHeader);

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    ginSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(ginSectionWrapper);

    // HOVER EVENT ---can do individually
    cocktailItem.addEventListener("mouseover", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-gin"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove("alcohol__mini-card--hovered-gin");
      }
      event.currentTarget.classList.add("alcohol__mini-card--hovered-gin");
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-gin"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove("alcohol__mini-card--hovered-gin");
      }
    });
  });
};

// VODKA

axios
  .get(`${API_BASE_URL}/?ingredients=vodka`, config)
  .then((response) => {
    console.log(response);
    getVodkaCocktails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

const vodkaSectionWrapper = document.createElement("section");
vodkaSectionWrapper.classList.add("alcohol");

const getVodkaCocktails = (response) => {
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    cocktailItem.classList.add("alcohol__mini-card");
    cocktailItem.classList.add("alcohol__mini-card--vodka");

    const cocktailItemShortName = document.createElement("h3");
    cocktailItemShortName.classList.add("alcohol__short-name");
    cocktailItemShortName.innerText = `${cocktail.name
      .slice(0, 2)
      .toUpperCase()}`;
    cocktailItem.appendChild(cocktailItemShortName);

    const cocktailItemName = document.createElement("p");
    cocktailItemName.classList.add("alcohol__name");
    cocktailItemName.innerText = `${cocktail.name}`;
    cocktailItem.appendChild(cocktailItemName);
    console.log(cocktailItemName);

    // POP-UP
    const cocktailCard = document.createElement("div");
    cocktailCard.classList.add("card");

    const cardHeading = document.createElement("h2");
    cardHeading.classList.add("card__title");
    cardHeading.innerText = `${cocktail.name.toUpperCase()}`;
    cocktailCard.appendChild(cardHeading);

    const cardInfoWrap = document.createElement("div");
    cardInfoWrap.classList.add("card__info-wrap");

    // INGERDIENTS
    const cardIngredientsWrap = document.createElement("div");
    cardIngredientsWrap.classList.add("ingredients__wrap");

    const ingredientsHeader = document.createElement("h4");
    ingredientsHeader.classList.add("ingredients__header");
    ingredientsHeader.innerText = `INGREDIENTS`;
    cardIngredientsWrap.appendChild(ingredientsHeader);

    const ingredientList = document.createElement("ul");
    ingredientList.classList.add("ingredients__list");
    for (let i = 0; i < cocktail.ingredients.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("ingredients__item");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredientList.appendChild(ingredient);
    }
    cardIngredientsWrap.appendChild(ingredientList);
    cardInfoWrap.appendChild(cardIngredientsWrap);

    // Instructions
    const cardInstructionWrap = document.createElement("div");
    cardInstructionWrap.classList.add("card__instruction-wrap");

    const instructionsHeader = document.createElement("h4");
    instructionsHeader.classList.add("card__instructions-header");
    instructionsHeader.innerText = `INSTRUCTIONS`;
    cardInstructionWrap.appendChild(instructionsHeader);

    const instructions = document.createElement("p");
    instructions.classList.add("card__instructions");
    instructions.innerText = `${cocktail.instructions}`;
    cardInstructionWrap.appendChild(instructions);
    cardInfoWrap.appendChild(cardInstructionWrap);

    cocktailCard.appendChild(cardInfoWrap);
    cocktailItem.appendChild(cocktailCard);
    vodkaSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(vodkaSectionWrapper);

    // HOVER EVENT ---can do individually
    cocktailItem.addEventListener("mouseover", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-vodka"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove("alcohol__mini-card--hovered-vodka");
      }
      event.currentTarget.classList.add("alcohol__mini-card--hovered-vodka");
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      const selectedCocktail = document.querySelector(
        ".alcohol__mini-card--hovered-vodka"
      );
      if (selectedCocktail) {
        selectedCocktail.classList.remove("alcohol__mini-card--hovered-vodka");
      }
    });
  });
};

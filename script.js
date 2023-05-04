// API config
const API_BASE_URL = "https://api.api-ninjas.com/v1/cocktail";
const config = {
  headers: {
    "X-Api-Key": "7MCYWsrFWY8L4O10ctFbMA==ZksmoXT5k7sgV9Qe",
  },
};

//Modal Handler
let showModal = false;

//Click card function
const showCardFunction = (drink, event, cocktail) => {
  const hiddenCard = document.querySelector(".card");
  console.log(event.currentTarget);
  hiddenCard.scrollTop = 0;

  if (hiddenCard) {
    hiddenCard.classList.remove("card--hidden");

    const cocktailName = document.querySelector(".card__title");
    const title = cocktail.name;
    cocktailName.innerText = `${title.toUpperCase()}`;

    const ingredients = document.querySelector(".ingredients__list");
    const ingredientList = cocktail.ingredients;
    ingredients.innerHTML = " ";

    for (let i = 0; i < ingredientList.length; i++) {
      const ingredient = document.createElement("li");
      ingredient.classList.add("ingredients__item");
      ingredient.innerText = `${cocktail.ingredients[i]}`;
      ingredients.appendChild(ingredient);
    }

    const instructions = document.querySelector(".card__instructions");
    const instruction = `${cocktail.instructions}`;
    instructions.innerText = `${instruction}`;
  }
  const shownCard = document.querySelector(".card");

  const closeButton = document.querySelector(".card__button");
  closeButton.addEventListener("click", () => {
    shownCard.classList.add("card--hidden");
  });

  console.log(`"alcohol__mini-card--${drink}"`);
  if (event.currentTarget.classList.contains(`alcohol__mini-card--${drink}`)) {
    shownCard.classList.remove("card--gin");
    shownCard.classList.remove("card--tequila");
    shownCard.classList.remove("card--rum");
    shownCard.classList.remove("card--vodka");

    shownCard.classList.add(`card--${drink}`);
  }
};

// Laying out the table
const cocktailsTable = document.getElementById("cocktails");

// //GET ALL DRINKS
axios
  .get(`${API_BASE_URL}/?ingredients=rum`, config)
  .then((response) => {
    const rumList = response.data;
    getRumCocktails(rumList);

    //VODKA
    axios.get(`${API_BASE_URL}/?ingredients=vodka`, config).then((response) => {
      const vodkaList = response.data.slice(0, 8);
      getVodkaCocktails(vodkaList);

      //TEQUILA
      axios
        .get(`${API_BASE_URL}/?ingredients=tequila`, config)
        .then((response) => {
          const tequilaList = response.data.slice(0, 8);
          getTequilaCocktails(tequilaList);

          //GIN
          axios
            .get(`${API_BASE_URL}/?ingredients=gin`, config)
            .then((response) => {
              const ginList = response.data;
              getGinCocktails(ginList);
            });
        });
    });
  })
  .catch((error) => {
    console.log(error);
  });

// RUM

const rumSectionWrapper = document.createElement("section");
rumSectionWrapper.classList.add("alcohol");

const getRumCocktails = (response) => {
  response.forEach((cocktail, i) => {
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

    rumSectionWrapper.appendChild(cocktailItem);
    cocktailsTable.appendChild(rumSectionWrapper);

    // HOVER EVENT
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

    // click -card
    cocktailItem.addEventListener("click", (event) => {
      showCardFunction("rum", event, cocktail);
    });
  });
};

// TEQUILA

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

    // click -card
    cocktailItem.addEventListener("click", (event) => {
      showCardFunction("tequila", event, cocktail);
    });
  });
};

// GIN

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

    // click -card
    cocktailItem.addEventListener("click", (event) => {
      showCardFunction("gin", event, cocktail);
    });
  });
};

// VODKA

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

    // click -card
    cocktailItem.addEventListener("click", (event) => {
      showCardFunction("vodka", event, cocktail);
    });
  });
};

const rumBtn = document.querySelector(".selection__option--rum");
rumBtn.addEventListener("click", (event) => {
  const drinksHighlighted = document.querySelector(".alcohol--highlighted-rum");
  if (drinksHighlighted) {
    drinksHighlighted.classList.remove("alcohol--highlighted-rum");
  }
  tequilaSectionWrapper.classList.remove("alcohol--highlighted-tequila");
  tequilaBtn.classList.remove("alcohol--highlighted-tequila");
  vodkaSectionWrapper.classList.remove("alcohol--highlighted-vodka");
  vodkaBtn.classList.remove("alcohol--highlighted-vodka");
  ginSectionWrapper.classList.remove("alcohol--highlighted-gin");
  ginBtn.classList.remove("alcohol--highlighted-gin");

  rumSectionWrapper.classList.add("alcohol--highlighted-rum");
  event.currentTarget.classList.add("alcohol--highlighted-rum");
});

const tequilaBtn = document.querySelector(".selection__option--tequila");
tequilaBtn.addEventListener("click", (event) => {
  const drinksHighlighted = document.querySelector(
    ".alcohol--highlighted-tequila"
  );
  if (drinksHighlighted) {
    drinksHighlighted.classList.remove("alcohol--highlighted-tequila");
  }
  rumSectionWrapper.classList.remove("alcohol--highlighted-rum");
  rumBtn.classList.remove("alcohol--highlighted-rum");
  vodkaSectionWrapper.classList.remove("alcohol--highlighted-vodka");
  vodkaBtn.classList.remove("alcohol--highlighted-vodka");
  ginSectionWrapper.classList.remove("alcohol--highlighted-gin");
  ginBtn.classList.remove("alcohol--highlighted-gin");

  tequilaSectionWrapper.classList.add("alcohol--highlighted-tequila");
  event.currentTarget.classList.add("alcohol--highlighted-tequila");
});

const ginBtn = document.querySelector(".selection__option--gin");
ginBtn.addEventListener("click", (event) => {
  const drinksHighlighted = document.querySelector(".alcohol--highlighted-gin");
  if (drinksHighlighted) {
    drinksHighlighted.classList.remove("alcohol--highlighted-gin");
  }
  tequilaSectionWrapper.classList.remove("alcohol--highlighted-tequila");
  tequilaBtn.classList.remove("alcohol--highlighted-tequila");
  vodkaSectionWrapper.classList.remove("alcohol--highlighted-vodka");
  vodkaBtn.classList.remove("alcohol--highlighted-vodka");
  rumSectionWrapper.classList.remove("alcohol--highlighted-rum");
  rumBtn.classList.remove("alcohol--highlighted-rum");
  ginSectionWrapper.classList.add("alcohol--highlighted-gin");
  event.currentTarget.classList.add("alcohol--highlighted-gin");
});

const vodkaBtn = document.querySelector(".selection__option--vodka");
vodkaBtn.addEventListener("click", (event) => {
  const drinksHighlighted = document.querySelector(
    ".alcohol--highlighted-vodka"
  );
  if (drinksHighlighted) {
    drinksHighlighted.classList.remove("alcohol--highlighted-vodka");
  }
  tequilaSectionWrapper.classList.remove("alcohol--highlighted-tequila");
  tequilaBtn.classList.remove("alcohol--highlighted-tequila");
  rumSectionWrapper.classList.remove("alcohol--highlighted-rum");
  rumBtn.classList.remove("alcohol--highlighted-rum");
  ginSectionWrapper.classList.remove("alcohol--highlighted-gin");
  ginBtn.classList.remove("alcohol--highlighted-gin");
  vodkaSectionWrapper.classList.add("alcohol--highlighted-vodka");
  event.currentTarget.classList.add("alcohol--highlighted-vodka");
});

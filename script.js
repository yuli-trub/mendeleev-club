// API CONFIG
const API_BASE_URL = "https://api.api-ninjas.com/v1/cocktail";
const config = {
  headers: {
    "X-Api-Key": "7MCYWsrFWY8L4O10ctFbMA==ZksmoXT5k7sgV9Qe",
  },
};

//MODAL
let showModal = false;

//CLICK
const showCardFunction = (drink, event, cocktail) => {
  const hiddenCard = document.querySelector(".card");
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

  if (event.currentTarget.classList.contains(`alcohol__mini-card--${drink}`)) {
    shownCard.classList.remove("card--gin");
    shownCard.classList.remove("card--tequila");
    shownCard.classList.remove("card--rum");
    shownCard.classList.remove("card--vodka");

    shownCard.classList.add(`card--${drink}`);
  }
};

//HOVER
const hoverMouseOver = (drink, event) => {
  const selectedCocktail = document.querySelector(
    `.alcohol__mini-card--hovered-${drink}`
  );
  if (selectedCocktail) {
    selectedCocktail.classList.remove(`alcohol__mini-card--hovered-${drink}`);
  }
  event.currentTarget.classList.add(`alcohol__mini-card--hovered-${drink}`);
};

const hoverMouseOut = (drink, event) => {
  const selectedCocktail = document.querySelector(
    `.alcohol__mini-card--hovered-${drink}`
  );
  if (selectedCocktail) {
    selectedCocktail.classList.remove(`alcohol__mini-card--hovered-${drink}`);
  }
};

//SECTION HIGHLIGHT FUNCTION
const highlightButton = (drink, event, selectedSection) => {
  rumSectionWrapper.classList.remove("alcohol--highlighted-rum");
  rumBtn.classList.remove("alcohol--highlighted-rum");
  tequilaSectionWrapper.classList.remove("alcohol--highlighted-tequila");
  tequilaBtn.classList.remove("alcohol--highlighted-tequila");
  vodkaSectionWrapper.classList.remove("alcohol--highlighted-vodka");
  vodkaBtn.classList.remove("alcohol--highlighted-vodka");
  ginSectionWrapper.classList.remove("alcohol--highlighted-gin");
  ginBtn.classList.remove("alcohol--highlighted-gin");

  selectedSection.classList.add(`alcohol--highlighted-${drink}`);
  event.currentTarget.classList.add(`alcohol--highlighted-${drink}`);
};

// TABLE LAYOUT
const cocktailsTable = document.getElementById("cocktails");

// CREATE SMALL CARDS FUNCTION
const createSmallCards = (cocktail, sectionWrapper, cocktailItem, drink) => {
  // const cocktailItem = document.createElement("article");
  cocktailItem.classList.add("alcohol__mini-card");
  cocktailItem.classList.add(`alcohol__mini-card--${drink}`);

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

  sectionWrapper.appendChild(cocktailItem);
  cocktailsTable.appendChild(sectionWrapper);
};

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
  response.forEach((cocktail) => {
    const cocktailItem = document.createElement("article");
    createSmallCards(cocktail, rumSectionWrapper, cocktailItem, "rum");

    cocktailItem.addEventListener("mouseover", (event) => {
      hoverMouseOver("rum", event);
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      hoverMouseOut("rum", event);
    });

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
    createSmallCards(cocktail, tequilaSectionWrapper, cocktailItem, "tequila");

    cocktailItem.addEventListener("mouseover", (event) => {
      hoverMouseOver("tequila", event);
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      hoverMouseOut("tequila", event);
    });

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
    createSmallCards(cocktail, ginSectionWrapper, cocktailItem, "gin");

    cocktailItem.addEventListener("mouseover", (event) => {
      hoverMouseOver("gin", event);
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      hoverMouseOut("gin", event);
    });

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
    createSmallCards(cocktail, vodkaSectionWrapper, cocktailItem, "vodka");

    cocktailItem.addEventListener("mouseover", (event) => {
      hoverMouseOver("vodka", event);
    });

    cocktailItem.addEventListener("mouseout", (event) => {
      hoverMouseOut("vodka", event);
    });

    cocktailItem.addEventListener("click", (event) => {
      showCardFunction("vodka", event, cocktail);
    });
  });
};

// SECTIONS HIGHLIGHT
const rumBtn = document.querySelector(".selection__option--rum");
rumBtn.addEventListener("click", (event) => {
  highlightButton("rum", event, rumSectionWrapper);
});

const tequilaBtn = document.querySelector(".selection__option--tequila");
tequilaBtn.addEventListener("click", (event) => {
  highlightButton("tequila", event, tequilaSectionWrapper);
});

const ginBtn = document.querySelector(".selection__option--gin");
ginBtn.addEventListener("click", (event) => {
  highlightButton("gin", event, ginSectionWrapper);
});

const vodkaBtn = document.querySelector(".selection__option--vodka");
vodkaBtn.addEventListener("click", (event) => {
  highlightButton("vodka", event, vodkaSectionWrapper);
});

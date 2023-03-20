// Get references to form and results section elements
const searchForm = document.querySelector("#search-form");
const resultsSection = document.querySelector("#results");

// Add event listener to form submission
searchForm.addEventListener("submit", (event) => {
  // Prevent form from submitting and page from reloading
  event.preventDefault();

  // Get search query and format values from form
  const searchQuery = document.querySelector("#search-query").value;
  const format = document.querySelector("#format-select").value;

  // Build URL for API request based on form values
  let apiUrl = `https://www.loc.gov/${
    format || "search"
  }/?q=${searchQuery}&fo=json`;


  // Make API request using fetch()
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Clear any previous search results
      resultsSection.innerHTML = "";

      // Loop through each item in the response and create a card for it
      data.results.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        const cardTitle = document.createElement("h3");
        cardTitle.textContent = item.title;
        card.appendChild(cardTitle);
        resultsSection.appendChild(card);
      });
    })
    .catch((error) => {
      console.log(error);
      alert("There was an error with your search. Please try again.");
    });
});

// Add a description paragraph to the page
const description = "A simple description";
const pEl = document.createElement("p");
pEl.textContent = description;
document.querySelector("body").appendChild(pEl);
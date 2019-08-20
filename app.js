// Init Github
const edamam = new edamam();

// Search input
const searchRecipe = document.getElementById("searchRecipe");

// Search input event listener
searchRecipe.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // console.log(userText);
    //Make http call
    edamam.getRecipe(recipe).then(data => {
      console.log(data);
    });
  }
});

// EDAMAM
class EDAMAM {
  constructor() {
    this.client_id = "0b33ad51";
    this.client_secret = "9846606a2c68ca5ef6fb82883af00c2d";
  }
  async getRecipe(recipe) {
    const repoResponse = await fetch(
      `https https://api.edamam.com/search/${recipe}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const recipeData = await profileResonse.json();

    return {
      recipe
    };
  }
}

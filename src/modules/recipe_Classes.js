//Rezeptklasse für Rezepte aus Datenbank
class Recipe {
  constructor(
    title,
    difficulty,
    portions,
    ingredients,
    time,
    source,
    sourceURL,
    image
  ) {
    this.title = title;
    this.difficulty = difficulty;
    this.portions = portions;
    this.ingredients = ingredients;
    this.time = time / 60;
    this.source = source;
    this.sourceURL = sourceURL;
    this.image = image;
  }
}

//Rezeptklasse für KI generierte Rezepte
class AIRecipe {
  constructor(title, portions, ingredients, time, steps) {
    this.title = title;
    this.portions = portions;
    this.ingredients = ingredients;
    this.time = time / 60;
    this.steps = steps;
  }
}

//Rezeptklasse für gespeicherte Rezepte in der Sidebar
class SavedRecipe {
  constructor(title, image, source) {
    this.title = title;
    this.image = image;
    this.source = source;
  }
}

export { Recipe, AIRecipe, SavedRecipe };


const END_POINT = process.env.REACT_APP_BASE_API_URL;
const RANDOM_COCKTAIL=process.env.REACT_APP_ADD_RANDOM_API;


const DEFAULT_OPTIONS = {
  header: { "content-type": "application/json" },
};

export const GetRandomCocktail = async () => {
  try {
    const cocktailsArrray=[]
    for (let index = 0; index < 9; index++) {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`,DEFAULT_OPTIONS);
    console.log(res)
    const {drinks}= await res.json();
    cocktailsArrray.push(drinks[0]);
    console.log(drinks)
    }
    return cocktailsArrray;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
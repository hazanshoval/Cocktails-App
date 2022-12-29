const END_POINT = process.env.REACT_APP_BASE_API_URL;
const BY_CATEGORY=process.env.REACT_APP_CHOOSE_BY_CATEGORY;

export const ByCategoryCocktail = async (categoryValue) => {
    try {
      const res = await fetch(`${END_POINT}${BY_CATEGORY}${categoryValue}`);
      const cocktail= await res.json();
      return cocktail;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
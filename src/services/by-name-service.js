const END_POINT = process.env.REACT_APP_BASE_API_URL;
const BY_NAME=process.env.REACT_APP_ADD_BY_NAME_API;

export const ByNameCocktail = async (nameValue) => {
    try {
      const res = await fetch(`${END_POINT}${BY_NAME}${nameValue}`);
      const cocktail= await res.json();
      return cocktail;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
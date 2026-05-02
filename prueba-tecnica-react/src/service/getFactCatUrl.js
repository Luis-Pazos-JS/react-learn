const URL_DOMAIN_CATAAS = `https://cataas.com/`
export const getFactCatUrl = async (fact) => {
   const firstWorld = fact.split(" ", 1)[0];
   const res = await fetch(
      `${URL_DOMAIN_CATAAS}cat/says/${firstWorld}?fontSize=50&width=250&height=250&json=true`);
   const response = await res.json();
   const { url } = response;
   return url;
}
const search = async (query)=>{
  try {
    const response = await fetch(`/api/catalog_system/pub/products/search/${query}`).then(res => res.json())
    return response;
  } catch (error) {
    console.log('error', error);
  }
}
export default search;

// use local storage to manage cart data
const addToDb = key =>{
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
      shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[key];
  if(quantity){
      const newQuantity = quantity + 1;
      shoppingCart[key] = newQuantity;
  }
  else{
      shoppingCart[key] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart
}
const removeFromDb = key =>{
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
      const shoppingCart = JSON.parse(storedCart);
      if(key in shoppingCart){
          delete shoppingCart[key];
          localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
      }
  }
}

const deleteShoppingCart = () =>{
  localStorage.removeItem('shopping-cart');
}

export {
  addToDb, 
  getStoredCart,
  removeFromDb,
  deleteShoppingCart
}
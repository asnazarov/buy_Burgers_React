export const addBurderToCart = (burgerObj) => ({
  type: 'ADD_BURGER_CART',
  payload: burgerObj,
})

export const clearCart = () => ({
  type: 'CLEAR_CART',
})

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
})
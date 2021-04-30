export const requestItemData = () => ({
  type: "REQUEST_ITEM_DATA",
});
export const receiveItemData = (data) => ({
  type: "RECEIVE_ITEM_DATA",
  data,
});

export const receiveItemDataError = () => ({
  type: "RECEIVE_ITEM_DATA_ERROR",
});


export const requestSingleItemData = () => ({
  type: "REQUEST_SINGLE_ITEM_DATA",
});
export const receiveSingleItemData = (data) => ({
  type: "RECEIVE_SINGLE_ITEM_DATA",
  data,
});

export const receiveSingleItemDataError = () => ({
  type: "RECEIVE_SINGLE_ITEM_DATA_ERROR",
});

export const addItemInCart = (data) => ({
  type: "ADD_ITEM_IN_CART",
  data,
})

export const minusOnefromCart = (data) => ({
  type: "MINUS_ONE_FROM_CART",
  data,
})

export const removeItem = (data) => ({
  type: "REMOVE_ITEM",
  data,
})

export const clearCart = () => ({
  type: "CLEAR_CART",
})
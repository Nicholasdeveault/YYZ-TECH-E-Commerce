const inititalState = {
  items: null,
  status: "idle",
  error: null,
  cart: {},
};

export default function itemsReducer(state = inititalState, action) {
  switch (action.type) {
    case "REQUEST_ITEM_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ITEM_DATA": {
      return {
        ...state,
        items: action.data.item,
        status: "idle",
      };
    }
    case "RECEIVE_ITEM_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    case "REQUEST_SINGLE_ITEM_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_SINGLE_ITEM_DATA": {
      return {
        ...state,
        item: action.data,
        status: "idle",
      };
    }
    case "RECEIVE_SINGLE_ITEM_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    case "ADD_ITEM_IN_CART": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.data._id]: {
            ...action.data,
            numInStock: state.cart[action.data._id]
              ? state.cart[action.data._id].numInStock - 1
              : action.data.numInStock - 1,
            quantity: state.cart[action.data._id]
              ? state.cart[action.data._id].quantity + 1
              : 1,
          },
        },
      };
    }
    case "MINUS_ONE_FROM_CART": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.data._id]: {
            ...action.data,
            numInStock: state.cart[action.data._id]
              ? state.cart[action.data._id].numInStock + 1
              : action.data.numInStock + 1,
            quantity: state.cart[action.data._id]
              ? state.cart[action.data._id].quantity - 1
              : 1,
          },
        },
      };
    }
    case "REMOVE_ITEM": {
      const copy = { ...state };
      delete copy.cart[action.data._id];
      return {...copy,
      cart: {
        ...copy.cart,

      },
      };
    }

    case "CLEAR_CART": {
      const copy = {...state};
      return {
        ...copy,
        cart: {},
      };
    }
    default: {
      return state;
    }
  }
}

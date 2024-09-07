import { ActionTypes } from '../actionTypes'
import { containers } from '../data'

const initialState = {
  product: JSON.parse(localStorage.getItem('data')),
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  containers: JSON.parse(localStorage.getItem('container')) || containers,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state,
        product: payload,
      };

    case ActionTypes.ADD_TO_CART: {
      const existingProduct = state.basket.find((el) => el.id === payload.id);
      let updatedBasket;

      if (existingProduct) {
        updatedBasket = state.basket.map((el) =>
          el.id === payload.id ? { ...el, quantity: el.quantity + 1 } : el
        );
      } else {
        updatedBasket = [...state.basket, { ...payload, quantity: 1 }];
      }

      localStorage.setItem('basket', JSON.stringify(updatedBasket));

      return {
        ...state,
        basket: updatedBasket,
      };
    }

    case ActionTypes.UPDATE_CART_QUANTITY: {
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === payload.id
            ? { ...el, quantity: el.quantity > 1 ? payload.quantity - 1 : 1 }
            : el
        ),
      };
    }

    case ActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        basket: state.basket.filter((el) => el.id !== payload.id),
      };

      case ActionTypes.UPDATE_CONTAINER: {
        const { id, inputValue } = payload;
    
        // Эгер контейнердин IDси жок болсо, колдонуучуга билдирүү көрсөтүү
        if (!state.containers.hasOwnProperty(id)) {
            alert(`Контейнер ID ${id} табылган жок!`); // Эскертүү
            return state; // Эгер ID жок болсо, абалды өзгөртпөйбүз
        }
    
        const updatedContainers = {
            ...state.containers,
            [id]: state.containers[id] + inputValue
        };
    
        localStorage.setItem('container', JSON.stringify(updatedContainers));
        return {
            ...state,
            containers: updatedContainers,
        };
    }

    default:
      return state;
  }
};
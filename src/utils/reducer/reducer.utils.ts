interface INITIAL_STATE_INTERFACE {
  isCartOpen: boolean;
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
}

type CartActions =
  | {
      type: "SET_CART_ITEM";
      payload: Omit<INITIAL_STATE_INTERFACE, "isCartOpen">;
    }
  | {type: "SET_IS_CART_OPEN"; payload: boolean};
export const createAction = (action: CartActions) => ({
  type: action.type,
  payload: action.payload,
});

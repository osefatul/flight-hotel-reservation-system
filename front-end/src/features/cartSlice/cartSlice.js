import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    message: "",
};


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    addToCart(state, action) {
    // const existingIndex = state.cartItems.findIndex(
    //     (item) => (item._id === action.payload._id ) && (item?.date === action.payload.date)
    // );

    // if (existingIndex >= 0) {
    //     state.cartItems[existingIndex] = {
    //     ...state.cartItems[existingIndex],
    //     itemQuantity: state.cartItems[existingIndex].itemQuantity + 1,
    //     };
    //     });
    // } else {

        let tempProductItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempProductItem);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        state.message = "Item added to cart successfully"},

    // decreaseCart(state, action) {
    // const itemIndex = state.cartItems.findIndex(
    //     (item) => item._id === action.payload._id
    // );

    // if (state.cartItems[itemIndex].itemQuantity > 1) {
    //     state.cartItems[itemIndex].itemQuantity -= 1;
    // } else if (state.cartItems[itemIndex].itemQuantity === 1) {
    //     const nextCartItems = state.cartItems.filter(
    //     (item) => item._id !== action.payload._id
    //     );
    //     state.cartItems = nextCartItems;

    // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
    

    // removeFromCart(state, action) {

    // state.cartItems.map((cartItem) => {

    //     if (cartItem.departureDate === action.payload.departureDate) {
    //         const nextCartItems = state.cartItems.filter(
    //         (item) =>  item.departureDate !== action.payload.departureDate
    //         );
    //         state.cartItems = nextCartItems;
    //     }

    //     if(cartItem.checkIn === action.payload.checkIn){
    //         // else{
    //         const nextCartItems = state.cartItems.filter(
    //             item => item?.checkIn !== action.payload?.checkIn
    //         );
    //         state.cartItems = nextCartItems;
    //     }

    //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    //     state.message = "Item removed from the cart successfully"
    //     return state;
    // });
    // },


    removeFlightFromCart(state, action) {
        state.cartItems.map((cartItem) => {
            if (cartItem.departureDate.departureDate === action.payload.departureDate.departureDate) {
                const nextCartItems = state.cartItems.filter(
                (item) =>  item.departureDate.departureDate !== action.payload.departureDate.departureDate
                );
                state.cartItems = nextCartItems;
            }
    
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            state.message = "Item removed from the cart successfully"
            return state;
        });
    },

    removeHotelFromCart(state, action) {
        state.cartItems.map((cartItem) => {
            if(cartItem.checkIn === action.payload.checkIn){
                // else{
                const nextCartItems = state.cartItems.filter(
                    item => item.checkIn !== action.payload.checkIn
                );
                state.cartItems = nextCartItems;
            }
    
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            state.message = "Item removed from the cart successfully"
            return state;
        });
    },

    getTotals(state, action) {
    let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
        const { price, itemQuantity } = cartItem;
        const itemTotal = price * itemQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += itemQuantity;

        return cartTotal;
        },
        {
        total: 0,
        quantity: 0,
        }
    );
    total = parseFloat(total.toFixed(2));
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
    },

    clearCart(state, action) {
    state.cartItems = [];
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    state.message = "Cart has been cleared";
    },
    },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart, removeFlightFromCart,removeHotelFromCart } =
cartSlice.actions;

export default cartSlice.reducer;
import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=> {
            console.log("state:", state); // proxy object
            console.log("state:", current(state)); // original state
            //mutating the state here
            // Thanks to Immer.js, you can "mutate" state directly inside reducers — RTK converts it into immutable updates behind the scenes.
            state.items.push(action.payload);
        },
        removeItem: (state, action)=>{
            state.items.pop();
        },
        clearCart: (state, action)=>{
            state.items.length = 0;
        }
    }
})
// cartslice object returns something like this
// {
//   name: "cart",
//   reducer: (state, action) => { ... },  // combined reducer logic
//   actions: {
//     addItem: ƒ,
//     removeItem: ƒ,
//     clearCart: ƒ
//   },
//   caseReducers: { ... },  // internal helpers
//   getInitialState: ƒ
// }



//Need to export 2 things from this file: actions and reducers
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
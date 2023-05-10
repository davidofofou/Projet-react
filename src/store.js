import { configureStore, createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState: [
      { 
        id: 1, name: 'T-shirt', 
        prix: '2100 CFA', 
        description: "Maillot en jersey de coton, initialement sans col et à manches courtes, dont la forme rappelle celle d'un T" 
      },
      { 
        id: 2, 
        name: 'chemise Coton', 
        prix: '1900 CFA', 
        description : "le coton est une fibre naturelle et est par conséquent hypoallergénique. Cette matière permet d’isoler la chaleur corporelle"
      },
      { 
        id: 3, 
        name: 'pantalon super 100', 
        prix: '1600 CFA',
        description: "pantalons super cent pour homme sont des atouts de notre dressing masculin. Amples au niveau de la taille, et pas sérrés au niveau des chevilles"
      },
      { 
        id: 4, 
        name: 'Robe de soirée', 
        prix: '2500 CFA',
        description: "Une robe de soirée est une longue robe tombante normalement portée pour des événements formels"
       },
       { 
        id: 4, 
        name: 'Robe de soirée', 
        prix: '2500 CFA',
        description: "Une robe de soirée est une longue robe tombante normalement portée pour des événements formels"
       },
       { 
        id: 4, 
        name: 'Robe de soirée', 
        prix: '2500 CFA',
        description: "Une robe de soirée est une longue robe tombante normalement portée pour des événements formels"
       },
       { 
        id: 4, 
        name: 'Robe de soirée', 
        prix: '2500 CFA',
        description: "Une robe de soirée est une longue robe tombante normalement portée pour des événements formels"
       },
       { 
        id: 4, 
        name: 'Robe de soirée', 
        prix: '2500 CFA',
        description: "Une robe de soirée est une longue robe tombante normalement portée pour des événements formels"
       }
    ],
    reducers:{
      addProduct: (state,action) => {
        const newProduct = action.payload;
        state.push(newProduct);
       },
      toggleProduct: (state, action) =>{ 
        state = state.filter(prod => prod.id !== action.payload.id);
        const updateProduct = action.payload;
        state.push(updateProduct);
      },
      deleteProduct: (state,action)=>{
        state = state.filter(prod => prod.id !== action.payload);
        return state;
       }
    }
});

const isLoading = false;

const  loadingSlice = createSlice({
name: "loading",
initialState: isLoading ,
reducers:{
   updateLoading: (state,action) => {
    state = action.payload;
    return state;
   }
}
});
const userSlice = createSlice({
  name: "users",
  initialState: [
    { id: 1, username: 'Arnaud', email: 'arnaud@gmail.com', password:'12345'},
    { id: 2, username: 'Gui',  email: 'gui@gmail.com', password:'12345'}
  ],
  reducers:{
    addUser: (state,action) => {
      const newUser = action.payload;
      state.push(newUser);
     }
  }
});

export const {addProduct, toggleProduct, deleteProduct} = productSlice.actions;

export const {addUser, updateUser} = userSlice.actions;

export const {updateLoading} = loadingSlice.actions;

const store = configureStore({
  reducer: {
    product : productSlice.reducer,
    users: userSlice.reducer,
    loading : loadingSlice.reducer
  }
})

export default store;

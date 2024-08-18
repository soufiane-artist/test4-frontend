import {createSlice} from '@reduxjs/toolkit'


const authSlice = createSlice({
    name : 'auth',
    initialState : {
        userAdmin:localStorage.getItem('userAdmin') ? JSON.parse(localStorage.getItem('userAdmin')) : null,
        user : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
        register:false,
    },
    reducers : {
        register(state,action) {
            state.register = action.payload
        },
        login(state,action) {
            state.user = action.payload
        },
        logout(state,action){
            state.user = action.payload
        },
        userAdmin(state,action){
            state.user =action.payload
        }
    }
})

const authReducer = authSlice.reducer;
const authActions = authSlice.actions;

export { authActions , authReducer}
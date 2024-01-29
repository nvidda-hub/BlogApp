import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface InitialUserDataInterface<T> {
    accessToken : T,
    username : T,
    firstName : T,
    lastName : T,
    email : T,
    profilePic : T
}

export const initialUserState : InitialUserDataInterface<string> = {
    accessToken : "",
    username : "",
    firstName : "",
    lastName : "",
    email : "",
    profilePic : ""
}

const UserSlice = createSlice({
    name : 'user',
    initialState : {user : initialUserState},
    reducers : {
        login : (state, action : PayloadAction<InitialUserDataInterface<string>>) => {
            
            state.user = action.payload
        },
        logout : (state) => {
            state.user = initialUserState
        },
    }
})

export const {login, logout} = UserSlice.actions
export default UserSlice.reducer
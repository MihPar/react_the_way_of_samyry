import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile_reducer"
import dialogsReducer from "./dialogs_reducer"
import sidebarReducer from "./sidebar_reducer"
import usersReducer from "./users_reducer"
import authReducer from "./auth_reducer"
import thunkMiddleware from "redux-thunk"
import { formik } from "formik"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formik,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store 
export default store
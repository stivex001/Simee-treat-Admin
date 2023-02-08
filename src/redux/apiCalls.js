
import { publicRequest } from "../requestMethods"
import { loginfailure, loginStart, loginSuccess } from "./userSlice"


export const login = async (dispatch, user) => {

    dispatch(loginStart())
    try {
       const res = await publicRequest.post("/users/login", user)
       dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginfailure())
    }
}
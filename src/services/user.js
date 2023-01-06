import axios from 'axios'
import { BASE_URL } from '../constants/url'
import { goToRecipesList } from '../routes/cordinator'

export const login = (body, clear, navigate, setRightButtonText, setIsloading) => {
    setIsloading(true)
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsloading(true)
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsloading(true)
            alert(err.response.data.message)
        })
}
export const signUp = (body, clear, navigate, setRightButtonText, setIsloading) => {
    setIsloading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsloading(true)
            alert(err.response.data.message)
        })
}

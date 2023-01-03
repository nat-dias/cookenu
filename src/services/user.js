import axios from 'axios'
import { BASE_URL } from '../constants/url'
import {goToLogin, goToRecipesList} from '../routes/cordinator'

export const login = (body, clear,  navigate) => {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToRecipesList(navigate)
        })
        .catch((err) => ("Erro no login"))
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToRecipesList(navigate)
    })
    .catch((err) => console.log(err))
}

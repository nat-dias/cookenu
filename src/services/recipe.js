import { BASE_URL } from '../constants/url'
import axios from 'axios'
import { goToRecipesList } from '../routes/cordinator'

export const createRecipe = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
    .then((res) =>{
        alert(res.data.message)
        clear()
        goToRecipesList(navigate)
    })
    .catch((err) => alert(err.response.message))
}
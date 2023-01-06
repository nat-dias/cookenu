import { BASE_URL } from '../constants/url'
import axios from 'axios'
import { goToRecipesList } from '../routes/cordinator'

export const createRecipe = (body, clear, navigate, setIsloading) => {
    setIsloading(true)

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
    .catch((err) => {
        setIsloading(true)
        alert(err.response.data.message)
    })
}
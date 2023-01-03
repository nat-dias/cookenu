import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToRecipesList } from '../routes/cordinator'

export const useUnprotectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      goToRecipesList(navigate)
    }
  }, [navigate])
}

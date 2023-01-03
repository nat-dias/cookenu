import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { goToRecipesList, goToLogin} from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { StyledToolBar } from './styled'

export const Header = ({rightButtonText, setRightButtonText}) => {
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  
  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      setRightButtonText("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick= {rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolBar>
      </AppBar>
  )
}
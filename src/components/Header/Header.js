import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { goToRecipesList, goToLogin} from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'
import { StyledToolBar } from './styled'


export const Header = () => {
  const navigate = useNavigate()
  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={() => goToRecipesList(navigate)} color="inherit">Cookenu</Button>
          <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
        </StyledToolBar>
      </AppBar>
  )
}
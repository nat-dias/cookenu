import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import styled from 'styled-components'
import { Toolbar } from '@mui/material'
import { goToRecipesList, goToLogin} from '../../routes/cordinator'
import { useNavigate } from 'react-router-dom'

const StyledToolBar = styled(Toolbar) `
    display: flex;
    flex-direction: row;
    justify-content:space-between;
`
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
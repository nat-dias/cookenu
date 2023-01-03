import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {RecipesListPage} from '../pages/RecipesListPage/RecipesListPage'
import {LoginPage} from '../pages/LoginPage/LoginPage'
import {SignUpPage} from '../pages/SignUpPage/SignUpPage'
import {AddRecipesPage} from '../pages/AddRecipesPage/AddRecipesPage'
import {RecipeDetailPage} from '../pages/RecipeDetailPage/RecipeDetailPage'

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route exact path ='/' element = {<RecipesListPage/>}/>
            <Route exact path ='/login' element = {<LoginPage/>}/>
            <Route exact path ='/cadastro' element = {<SignUpPage />} />
            <Route exact path ='/detalhe/:id' element = {<RecipeDetailPage />} />
            <Route exact path ='/adicionar-receita' element = {<AddRecipesPage />} />    
        </Routes>
        </BrowserRouter>
    )
}
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { RecipesListPage } from '../pages/RecipesListPage/RecipesListPage'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { SignUpPage } from '../pages/SignUpPage/SignUpPage'
import { AddRecipesPage } from '../pages/AddRecipesPage/AddRecipesPage'
import { RecipeDetailPage } from '../pages/RecipeDetailPage/RecipeDetailPage'

export const Router = ({setRightButtonText}) => {
    return (
        <Routes>
            <Route exact path='/' element={<RecipesListPage />} />
            <Route exact path='/login' element={<LoginPage setRightButtonText={setRightButtonText}/>} />
            <Route exact path='/cadastro' element={<SignUpPage setRightButtonText={setRightButtonText}/>} />
            <Route exact path='/detalhe/:id' element={<RecipeDetailPage />} />
            <Route exact path='/adicionar-receita' element={<AddRecipesPage />} />
        </Routes>
    )
}
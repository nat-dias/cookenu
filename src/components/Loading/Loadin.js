import { CircularProgress } from '@mui/material'
import React from 'react'
import { LoadingContainer } from './styled'

export const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    )
}
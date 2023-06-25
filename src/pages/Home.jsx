import React from 'react'
import NavBar from '../components/NavBar'
import RickAndMortyCard from '../components/Card'
import { Container } from '@mui/system'

export const Home = () => {
    return (
        <div>
            <NavBar/>
            <Container maxWidth="false">
               <RickAndMortyCard /> 
            </Container>
            
        </div>
    )
}
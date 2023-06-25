import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import RickAndMortyCard from '../components/Card'
import { Grid } from '@mui/material'
import { Box, Container } from '@mui/system'

export const Home = () => {

    const [characters, setCharacters] = useState([])
    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = () => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then((res)=> setCharacters(res.data.results))
        .catch((err) => console.log(err))
    }
    
    return (
        <div>
            <NavBar/>
            <Container maxWidth="false">
                <Grid container>
                    {characters.map((character, key) => (
                        <Grid item xs={3}key={key}>
                        <RickAndMortyCard name={character.name} /> 
                        </Grid>
                    ))}
                    
                </Grid>                
            </Container>
            
        </div>
    )
}
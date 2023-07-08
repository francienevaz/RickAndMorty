import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import RickAndMortyCard from '../components/Card'
import { Grid } from '@mui/material'
import { Container } from '@mui/system'

export const Home = () => {

    const [characters, setCharacters] = useState([])
    useEffect(() => {
        getCharacters()
    }, [])

    const getCharacters = () => {
        let endpoints = [];
        for (let i = 1; i < 200; i++) {
            endpoints.push(`https://rickandmortyapi.com/api/character/${i}/`)
        }
        axios.all(endpoints.map((endpoint) => axios
        .get(endpoint)))
        .then((res) => setCharacters(res))
        .catch((err) => console.log(err))
        
    };

    const charactersFilter = (name) => {
        let filteredCharacters = []

        if (name === ""){
            getCharacters()
        }
        for (let i in characters) {

            if (characters[i].data.name.toLowerCase().includes(name.toLowerCase())){
                filteredCharacters.push(characters[i]);
            }
        }
        setCharacters(filteredCharacters)
    }
    
    return (
        <div>
            <NavBar charactersFilter={charactersFilter}/>
            <Container maxWidth="false">
                <Grid container spacing={2}>
                    {characters.map((character, key) => (
                        <Grid item xs={2}key={key}>
                        <RickAndMortyCard name={character.data.name} image={character.data.image} status={character.data.status}/> 
                        </Grid>
                    ))}
                    
                </Grid>                
            </Container>
            
        </div>
    )
}

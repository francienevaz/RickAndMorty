import * as React from 'react'
import Card from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions} from '@mui/material'

export default function rickAndMortyCard () {
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
                <CardMedia>
                    component="img"
                    height="140"
                    image="#"
                    alt="rick"
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5' component="div">
                        Rick
                    </Typography>
                    <Typography variant='body2' color="text.secondary">
                        Descrição
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color='primary'> Share</Button>
            </CardActions>
        </Card>
    )
}
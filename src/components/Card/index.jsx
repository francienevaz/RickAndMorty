import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions} from '@mui/material'

export default function RickAndMortyCard( {name, image, status} ) {
  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
            <CardMedia
            sx={{ height: 300 }}
            image={image}
            title="rick"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Status: {status}
            </Typography>
            </CardContent>
      </CardActionArea>
        {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
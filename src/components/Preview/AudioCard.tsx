import { Card, Box, CardContent, Typography, IconButton, CardMedia } from '@mui/material'
import { SkipNext, SkipPrevious, PlayArrow } from '@mui/icons-material'
import musicIcon from '../../assets/386a788b-59d5-4f4d-be84-9f5bc1088bc3.webp'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

export default function AudioCard() {
    const theme = useContext(ThemeContext);

    return (

        <Card sx={{ minWidth: '50%', maxWidth: '50%', maxHeight: '20rem', borderRadius: '20px', position: 'relative' }}>
            {/* <CardMedia
                component="img"
                sx={{ width: "100%", objectFit: 'cover', position: 'absolute' }}
                image={musicIcon}
                alt="Live from space album cover"
            /> */}

            <CardContent sx={{ zIndex: 99, position: 'relative'}}>
                <Typography gutterBottom variant="h5" component="div">
                    Audio Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a description of the audio content.
                </Typography>
            </CardContent>
            <CardMedia
                component="audio"
                controls
                src="http://103.156.188.31:8000/stream" // The path to your audio file
            />
        </Card>
    )
}
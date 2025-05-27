import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Step4 = () => {
    const navigate = useNavigate();

    const fieldStyles = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        input: { color: 'white' },
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': { color: 'white' },
        },
        borderRadius: '10px',
    };

    
   // Styles for Buttons
   const buttonStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    color: 'white',
    padding: '10px 30px', // Taille similaire à Step2
    fontSize: '1rem', // Taille standard
    borderRadius: '10px', // Coins arrondis
    border: '2px solid rgba(255, 255, 255, 0.3)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.6)',
    },
};



const buttonGreenStyles = {
    ...buttonStyles, // Hérite des styles généraux
    backgroundColor: '#4CAF50', // Fond vert
    '&:hover': {
        backgroundColor: '#4CAF50', // Garde le même vert au survol
        boxShadow: '0 0 15px rgba(76, 175, 80, 0.6)', // Effet lumineux vert
        filter: 'brightness(1.2)', // Légère augmentation de la luminosité
    },
};

    return (
        <Layout>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', // Center everything vertically
                    alignItems: 'center',
                    height: '100%', // Full height of the container
                    padding: '0 20px',
                }}
            >
                {/* Title */}
                <Box sx={{ textAlign: 'center', padding: { xs: '20px', md: '30px' }, width: '100%' }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 2,
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.3,
                        }}
                    >
                        Your References
                    </Typography>
                    
                </Box>

                {/* Form */}
                <Box component="form" sx={{ width: { xs: '90%', sm: '75%', md: '60%' }, gap: 3 }} noValidate>
                    {/* Primary Reference */}
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                mb: 1,
                                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            }}
                        >
                            Primary Reference
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Relationship"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Secondary Reference */}
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                mb: 1,
                                fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            }}
                        >
                            Secondary Reference
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="First Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Last Name"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Phone Number"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Relationship"
                                    variant="outlined"
                                    fullWidth
                                    sx={fieldStyles}
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Buttons */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button
                                                onClick={() => navigate('/step3')}
                                                variant="outlined"
                                                sx={buttonStyles}
                                            >
                                                Previous
                                            </Button>
                                            <Button
                                                onClick={() => navigate('/step5')}
                                                variant="contained"
                                                sx={buttonGreenStyles}
                                            >
                                                Next
                                            </Button>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Step4;

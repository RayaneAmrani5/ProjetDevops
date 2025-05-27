import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import { Box, Typography, TextField, Button } from '@mui/material';

function ExistingClient() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%', // Ajuste la hauteur automatiquement
          padding: '0 20px',
        }}
      >
        {/* Titre principal */}
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
            Great to See You Again !
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              lineHeight: 1.6,
            }}
          >
            What's the email address you used?
          </Typography>
        </Box>

        {/* Formulaire */}
        <Box
          component="form"
          sx={{
            width: { xs: '90%', sm: '75%', md: '60%' }, // Largeur adaptable avec une bonne proportion
            maxWidth: '600px', // Limite maximale pour grands écrans
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            alignItems: 'center',
          }}
          noValidate
          autoComplete="off"
        >
          {/* Champ Email */}
          <TextField
  label="Email Address"
  variant="outlined"
  fullWidth
  InputProps={{
    sx: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fond transparent avec contraste
      color: 'white', // Texte blanc
      padding: '0 15px',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(255, 255, 255, 0.5)', // Contour par défaut en blanc semi-transparent
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Contour blanc lors du focus
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', // Effet lumineux au focus
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white', // Contour blanc au survol
      },
    },
  }}
  InputLabelProps={{
    sx: {
      color: 'rgba(255, 255, 255, 0.7)', // Texte du label en blanc semi-transparent
      '&.Mui-focused': {
        color: 'white', // Texte du label blanc lors du focus
      },
    },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px', // Coins arrondis
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    },
    width: { xs: '90%', sm: '80%', md: '70%' },
    maxWidth: '800px',
    minWidth: '400px',
  }}
/>


          {/* Boutons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              gap: 2,
            }}
          >
            {/* Bouton Retour */}
            <Button
              onClick={() => navigate('/')}
              variant="outlined"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                padding: '10px 30px',
                fontSize: '1rem',
                borderRadius: '10px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                },
              }}
            >
              Back
            </Button>

            {/* Bouton Continuer */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#2196F3',
                color: 'white',
                padding: '10px 30px',
                fontSize: '1rem',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '#1976D2',
                },
              }}
            >
              Proceed
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default ExistingClient;

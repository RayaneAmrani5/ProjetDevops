import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { Box, Typography, Button, Grid } from '@mui/material';
import { FaUserCheck, FaFlag } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%', // Assure que la hauteur correspond au parent
          padding: '0 20px',
        }}
      >
        {/* Grand titre */}
        <Box sx={{ textAlign: 'center', padding: { xs: '20px', md: '30px' } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              color: 'white',
              fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' }, // Augmenté pour toutes tailles
              lineHeight: 1.3,
            }}
          >
            Empower Your Financial Future.
          </Typography>

          {/* Petit paragraphe */}
          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mx: 'auto',
              color: 'rgba(255, 255, 255, 0.9)', // Accentue la lisibilité
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' }, // Augmenté
              lineHeight: 1.6,
            }}
          >
            Need a Fast and Secure Loan? We're Here with Tailored Solutions to Fund Your Projects and Turn Your Dreams into Reality – Effortlessly.
          </Typography>
        </Box>

        {/* Section critères */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px 0',
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              flexWrap: 'nowrap', // Empêche les lignes multiples
              overflowX: 'auto', // Permet le défilement horizontal si nécessaire
            }}
          >
            {[
              {
                icon: <FaUserCheck size={40} color="white" />,
                description: 'You must be 18 years or older.',
              },
              {
                icon: <FaFlag size={40} color="white" />,
                description: 'You must be a Canadian resident.',
              },
              {
                icon: <MdAttachMoney size={40} color="white" />,
                description: 'A stable minimum income is required.',
              },
            ].map((critere, index) => (
              <Grid item key={index}>
                <Box
                  sx={{
                    width: { xs: 120, sm: 150, md: 180 }, // Largeur adaptable
                    minHeight: '110px', // Hauteur uniforme
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    padding: '15px',
                    borderRadius: '10px',
                    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s ease',
                    display: 'flex', // Centrer le contenu
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ mb: 1 }}>{critere.icon}</Box>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.8,
                      color: 'white',
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                      lineHeight: '1.4',
                    }}
                  >
                    {critere.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Question avec deux boutons */}
        <Box sx={{ textAlign: 'center', padding: '20px 0' }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: 'white',
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }, // Augmenté
            }}
          >
            Already Part of Our Family?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {/* Bouton "Déjà client" */}
            <Button
              onClick={() => navigate('/existing-client')}
              variant="contained"
              sx={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 30px',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Augmenté
                '&:hover': { backgroundColor: '#3e8e41' },
              }}
            >
              Already with Us 
            </Button>

            {/* Bouton "Nouveau client" */}
            <Button
              onClick={() => navigate('/Step1')}
              variant="contained"
              sx={{
                backgroundColor: '#2196F3',
                color: 'white',
                padding: '10px 30px',
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, // Augmenté
                '&:hover': { backgroundColor: '#1976D2' },
              }}
            >
              Get Started Now !
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;

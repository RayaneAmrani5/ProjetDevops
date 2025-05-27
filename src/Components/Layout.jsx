import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import backgroundImage from '../assets/moneygift.jpg';
import logoImage from '../assets/logo1.png';

function Layout({ children }) {
  const navigate = useNavigate(); // Initialiser useNavigate

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw', // Largeur totale
        minHeight: '100vh', // Hauteur minimale pour éviter les espaces blancs
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,  // Modifié pour un dégradé plus clair en haut
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto', // Permettre le défilement si le contenu dépasse
      }}
    >
      {/* Navbar */}
      <Box
        sx={{
          flex: '0 0 auto', // Fixe la hauteur de la navbar
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          height: '10%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logoImage} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        </Box>
        <Box>
          <Button
            onClick={() => navigate('/')} // Ajout de la navigation vers "/"
            variant="contained"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)', // Fond semi-transparent par défaut
              color: 'white',
              fontSize: '14px',
              padding: '8px 20px',
              borderRadius: '20px', // Coins arrondis
              border: '2px solid rgba(255, 255, 255, 0.4)', // Bordure visible
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Ombre subtile
              transition: 'all 0.3s ease', // Transition pour le hover
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fond plus clair au survol
                border: '2px solid rgba(255, 255, 255, 0.6)', // Bordure plus lumineuse au survol
              },
            }}
          >
            Home
          </Button>
        </Box>
      </Box>

      {/* Contenu dynamique */}
      <Box
        sx={{
          flex: '1 1 auto', // S'étend pour remplir l'espace disponible
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          flex: '0 0 auto', // Fixe la hauteur du footer
          textAlign: 'center',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" sx={{ fontSize: 12, color: '#aaa' }}>
          © 2024 Goodlife Loan | All rights reserved. | Privacy Policy | Terms of Use
        </Typography>
      </Box>
    </Box>
  );
}

export default Layout;

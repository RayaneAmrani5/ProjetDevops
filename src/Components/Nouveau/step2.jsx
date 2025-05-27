import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Step2 = ({ setLoanData, loanData = {} }) => {
  const navigate = useNavigate();

  const defaultAddress = loanData.address || {};

  // État local pour les champs du formulaire
  const [formData, setFormData] = useState({
    civicNumber: defaultAddress.civicNumber || '',
    streetName: defaultAddress.streetName || '',
    aptNo: defaultAddress.aptNo || '', // Optionnel
    city: defaultAddress.city || '',
    province: defaultAddress.province || '',
    postalCode: defaultAddress.postalCode || '',
    moveinDate: defaultAddress.moveinDate || '',
  });

  // État local pour les erreurs
  const [errors, setErrors] = useState({});

  // Gestion des provinces
  const provinces = [
    { name: 'Alberta', code: 'AB' },
    { name: 'British Columbia', code: 'BC' },
    { name: 'Manitoba', code: 'MB' },
    { name: 'New Brunswick', code: 'NB' },
    { name: 'Newfoundland and Labrador', code: 'NL' },
    { name: 'Northwest Territories', code: 'NT' },
    { name: 'Nova Scotia', code: 'NS' },
    { name: 'Nunavut', code: 'NU' },
    { name: 'Ontario', code: 'ON' },
    { name: 'Prince Edward Island', code: 'PE' },
    { name: 'Quebec', code: 'QC' },
    { name: 'Saskatchewan', code: 'SK' },
    { name: 'Yukon', code: 'YT' },
  ];

  // Gérer les changements dans les champs
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Réinitialiser les erreurs pour ce champ
  };

  // Validation des champs
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.civicNumber) tempErrors.civicNumber = 'Civic Number is required.';
    if (!formData.streetName) tempErrors.streetName = 'Street Name is required.';
    if (!formData.city) tempErrors.city = 'City is required.';
    if (!formData.province) tempErrors.province = 'Province is required.';
    if (!formData.postalCode) tempErrors.postalCode = 'Postal Code is required.';
    if (!formData.moveinDate) tempErrors.moveinDate = 'Move-in Date is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Passer à l'étape suivante
  const handleNext = () => {
    if (validateForm()) {
      const updatedLoanData = {
        ...loanData,
        address: {
          ...formData,
          aptNo: formData.aptNo || null, // Si vide, l'enregistrer comme null
        },
      };

      // Mettre à jour l'objet global
      setLoanData(updatedLoanData);

      // Afficher l'objet JSON dans la console
      console.log('Loan Request JSON:', JSON.stringify(updatedLoanData, null, 2));

      // Naviguer vers l'étape suivante
      navigate('/step3');
    }
  };

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

  const buttonStyles = {
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
  };

  const buttonGreenStyles = {
    ...buttonStyles,
    backgroundColor: '#4CAF50',
    '&:hover': {
      backgroundColor: '#4CAF50',
      boxShadow: '0 0 15px rgba(76, 175, 80, 0.6)',
      filter: 'brightness(1.2)',
    },
  };

  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '0 20px',
        }}
      >
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
            Your Address Information
          </Typography>
        </Box>

        <Box component="form" sx={{ width: { xs: '90%', sm: '75%', md: '60%' }, gap: 3 }} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Number"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.civicNumber}
                onChange={(e) => handleFieldChange('civicNumber', e.target.value)}
                error={!!errors.civicNumber}
                helperText={errors.civicNumber}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Street"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.streetName}
                onChange={(e) => handleFieldChange('streetName', e.target.value)}
                error={!!errors.streetName}
                helperText={errors.streetName}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Apartment"
                variant="outlined"
                fullWidth
                sx={fieldStyles}
                value={formData.aptNo}
                onChange={(e) => handleFieldChange('aptNo', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.city}
                onChange={(e) => handleFieldChange('city', e.target.value)}
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Province"
                select
                variant="outlined"
                fullWidth
                required
                sx={{
                  ...fieldStyles,
                  '& .MuiSelect-select': { color: 'white' },
                }}
                value={formData.province}
                onChange={(e) => handleFieldChange('province', e.target.value)}
                error={!!errors.province}
                helperText={errors.province}
              >
                {provinces.map((province) => (
                  <MenuItem key={province.code} value={province.code}>
                    {province.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Postal Code"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.postalCode}
                onChange={(e) => handleFieldChange('postalCode', e.target.value)}
                error={!!errors.postalCode}
                helperText={errors.postalCode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Move-in Date"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
                sx={fieldStyles}
                value={formData.moveinDate}
                onChange={(e) => handleFieldChange('moveinDate', e.target.value)}
                error={!!errors.moveinDate}
                helperText={errors.moveinDate}
              />
            </Grid>
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button onClick={() => navigate('/step1')} variant="outlined" sx={buttonStyles}>
              Previous
            </Button>
            <Button onClick={handleNext} variant="contained" sx={buttonGreenStyles}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Step2;

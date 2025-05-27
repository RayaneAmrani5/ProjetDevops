import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Step3 = ({ setLoanData, loanData = {} }) => {
    const navigate = useNavigate();

    const defaultFinancialInfo = loanData.financialInformation || {};

    // État local pour les champs du formulaire
    const [formData, setFormData] = useState({
        isRenter: defaultFinancialInfo.isRenter ? 'Renter' : 'Owner',
        grossAnnualSalary: defaultFinancialInfo.grossAnnualSalary || '',
        monthlyHousingPayment: defaultFinancialInfo.monthlyHousingPayment || '',
        monthlyElectricalPayment: defaultFinancialInfo.monthlyElectricalPayment || '',
        monthlyCarPayment: defaultFinancialInfo.monthlyCarPayment || '',
        monthlyOtherPayment: defaultFinancialInfo.monthlyOtherPayment || '',
    });

    // État local pour les erreurs
    const [errors, setErrors] = useState({});

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
        if (!formData.grossAnnualSalary) tempErrors.grossAnnualSalary = 'Annual income is required.';
        if (!formData.monthlyHousingPayment) tempErrors.monthlyHousingPayment = 'Housing payment is required.';
        if (!formData.monthlyElectricalPayment) tempErrors.monthlyElectricalPayment = 'Electricity payment is required.';
        if (!formData.monthlyCarPayment) tempErrors.monthlyCarPayment = 'Car payment is required.';
        if (!formData.monthlyOtherPayment) tempErrors.monthlyOtherPayment = 'Other payments are required.';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // Passer à l'étape suivante
    const handleNext = () => {
        if (validateForm()) {
            const updatedLoanData = {
                ...loanData,
                financialInformation: {
                    isRenter: formData.isRenter === 'Renter',
                    grossAnnualSalary: parseInt(formData.grossAnnualSalary, 10),
                    monthlyHousingPayment: parseInt(formData.monthlyHousingPayment, 10),
                    monthlyElectricalPayment: parseInt(formData.monthlyElectricalPayment, 10),
                    monthlyCarPayment: parseInt(formData.monthlyCarPayment, 10),
                    monthlyOtherPayment: parseInt(formData.monthlyOtherPayment, 10),
                },
            };

            // Mettre à jour l'objet global
            setLoanData(updatedLoanData);

            // Afficher l'objet JSON dans la console
            console.log('Loan Request JSON:', JSON.stringify(updatedLoanData, null, 2));

            // Naviguer vers l'étape suivante
            navigate('/step4');
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
        '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
        },
        '& input[type=number]': {
            MozAppearance: 'textfield',
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
                        Let’s Talk About Your Obligations
                    </Typography>
                </Box>

                <Box component="form" sx={{ width: { xs: '90%', sm: '75%', md: '60%' }, gap: 3 }} noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Your Status"
                                select
                                variant="outlined"
                                fullWidth
                                required
                                sx={{
                                    ...fieldStyles,
                                    '& .MuiSelect-select': {
                                        color: 'white',
                                    },
                                }}
                                value={formData.isRenter}
                                onChange={(e) => handleFieldChange('isRenter', e.target.value)}
                                error={!!errors.isRenter}
                                helperText={errors.isRenter}
                            >
                                <MenuItem value="Renter">Renter</MenuItem>
                                <MenuItem value="Owner">Owner</MenuItem>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Annual Income"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                sx={fieldStyles}
                                value={formData.grossAnnualSalary}
                                onChange={(e) => handleFieldChange('grossAnnualSalary', e.target.value)}
                                error={!!errors.grossAnnualSalary}
                                helperText={errors.grossAnnualSalary}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'white' }}>$</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Monthly Rent/Mortgage"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                sx={fieldStyles}
                                value={formData.monthlyHousingPayment}
                                onChange={(e) => handleFieldChange('monthlyHousingPayment', e.target.value)}
                                error={!!errors.monthlyHousingPayment}
                                helperText={errors.monthlyHousingPayment}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'white' }}>$</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Heating & Electricity"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                sx={fieldStyles}
                                value={formData.monthlyElectricalPayment}
                                onChange={(e) => handleFieldChange('monthlyElectricalPayment', e.target.value)}
                                error={!!errors.monthlyElectricalPayment}
                                helperText={errors.monthlyElectricalPayment}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'white' }}>$</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Car Loan"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                sx={fieldStyles}
                                value={formData.monthlyCarPayment}
                                onChange={(e) => handleFieldChange('monthlyCarPayment', e.target.value)}
                                error={!!errors.monthlyCarPayment}
                                helperText={errors.monthlyCarPayment}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'white' }}>$</InputAdornment>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Furniture Loan"
                                type="number"
                                variant="outlined"
                                fullWidth
                                required
                                sx={fieldStyles}
                                value={formData.monthlyOtherPayment}
                                onChange={(e) => handleFieldChange('monthlyOtherPayment', e.target.value)}
                                error={!!errors.monthlyOtherPayment}
                                helperText={errors.monthlyOtherPayment}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end" sx={{ color: 'white' }}>$</InputAdornment>,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button onClick={() => navigate('/step2')} variant="outlined" sx={buttonStyles}>
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

export default Step3;

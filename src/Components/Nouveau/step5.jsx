import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';

const Step5 = () => {
    const navigate = useNavigate();

    const [incomeType, setIncomeType] = useState('');
    const [employmentInformation, setEmploymentInformation] = useState({
        incomeType: '',
        occupation: '',
        employerName: '',
        supervisorName: '',
        employerPhoneNumber: '',
        employerExtension: '',
        payFrequencyCode: '',
        hiringDate: '',
        nextPayDate: '',
        benefitsStartDate: '',
        directDeposit: false,
        workPhoneNumber: '',
        depositFrequencyCode: '',
        nextDepositDate: '',
        selfEmployedStartDate: '',
    });

    const handleFieldChange = (field, value) => {
        setEmploymentInformation((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleIncomeTypeChange = (event, newIncomeType) => {
        if (newIncomeType) {
            setIncomeType(newIncomeType);
            setEmploymentInformation({ ...employmentInformation, incomeType: newIncomeType });
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

    const renderFields = () => {
        switch (incomeType) {
            case 'EMPLOYEE':
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Occupation"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.occupation}
                                onChange={(e) => handleFieldChange('occupation', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Employer Name"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.employerName}
                                onChange={(e) => handleFieldChange('employerName', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Supervisor Name"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.supervisorName}
                                onChange={(e) => handleFieldChange('supervisorName', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Employer Phone Number"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.employerPhoneNumber}
                                onChange={(e) => handleFieldChange('employerPhoneNumber', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Pay Frequency Code"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.payFrequencyCode}
                                onChange={(e) => handleFieldChange('payFrequencyCode', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hiring Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.hiringDate}
                                onChange={(e) => handleFieldChange('hiringDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Next Pay Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.nextPayDate}
                                onChange={(e) => handleFieldChange('nextPayDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                    </Grid>
                );
            case 'EMPLOYMENT_INSURANCE':
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Benefits Start Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.benefitsStartDate}
                                onChange={(e) => handleFieldChange('benefitsStartDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Next Pay Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.nextPayDate}
                                onChange={(e) => handleFieldChange('nextPayDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                    </Grid>
                );
            case 'RETIREMENT_PLAN':
                return <Typography sx={{ color: 'white' }}>No additional information required.</Typography>;
            case 'SELF_EMPLOYED':
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Work Phone Number"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.workPhoneNumber}
                                onChange={(e) => handleFieldChange('workPhoneNumber', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Deposit Frequency Code"
                                fullWidth
                                variant="outlined"
                                value={employmentInformation.depositFrequencyCode}
                                onChange={(e) => handleFieldChange('depositFrequencyCode', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Next Deposit Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.nextDepositDate}
                                onChange={(e) => handleFieldChange('nextDepositDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Self-Employed Start Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.selfEmployedStartDate}
                                onChange={(e) => handleFieldChange('selfEmployedStartDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                    </Grid>
                );
            case 'DISABILITY':
            case 'PARENTAL_INSURANCE':
                return (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Next Deposit Date"
                                type="date"
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                                value={employmentInformation.nextDepositDate}
                                onChange={(e) => handleFieldChange('nextDepositDate', e.target.value)}
                                sx={fieldStyles}
                            />
                        </Grid>
                    </Grid>
                );
            default:
                return null;
        }
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 2,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        textAlign: 'center',
                    }}
                >
                    Your Source of Income
                </Typography>
                <ToggleButtonGroup
    value={incomeType}
    exclusive
    onChange={handleIncomeTypeChange}
    sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        marginBottom: 3,
        justifyContent: 'center',
    }}
>
    {['EMPLOYEE', 'EMPLOYMENT_INSURANCE', 'RETIREMENT_PLAN', 'SELF_EMPLOYED', 'DISABILITY', 'PARENTAL_INSURANCE'].map((type) => (
        <ToggleButton
            key={type}
            value={type}
            sx={{
                color: 'white', // Texte blanc
                backgroundColor: incomeType === type ? 'white' : '#42A5F5', // Fond blanc si sélectionné, bleu sinon
                fontWeight: incomeType === type ? 'bold' : 'normal', // Texte gras si sélectionné
                borderRadius: '10px', // Coins arrondis
                padding: '10px 20px',
                textTransform: 'uppercase', // Texte en majuscules
                transition: 'all 0.3s ease', // Transition fluide

                // Style du contour lumineux
                border: incomeType === type 
                    ? '2px solid white' // Contour blanc permanent
                    : '1px solid transparent', // Aucun contour pour les autres boutons

                // Ombre extra lumineuse
                boxShadow: incomeType === type
                    ? '0 0 30px 10px rgba(255, 255, 255, 0.9), 0 0 60px 20px rgba(255, 255, 255, 0.7)' // Ombre lumineuse renforcée
                    : 'none',

                '&:hover': {
                    backgroundColor: incomeType === type ? 'white' : '#64B5F6', // Gris clair si survolé
                },
            }}
        >
            {type.replace('_', ' ')}
        </ToggleButton>
    ))}
</ToggleButtonGroup>


                <Box sx={{ width: '100%', maxWidth: 800 }}>{renderFields()}</Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 800, mt: 3 }}>
                    <Button
                        onClick={() => navigate('/step4')}
                        variant="outlined"
                        sx={buttonStyles}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => navigate('/step6')}
                        variant="contained"
                        sx={buttonGreenStyles}
                    >
                        Next
                    </Button>
                </Box>
            </Box>
        </Layout>
    );
};

export default Step5;

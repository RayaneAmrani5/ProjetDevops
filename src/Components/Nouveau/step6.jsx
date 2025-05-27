import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox, FormControlLabel, Grid, Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';


const Step6 = () => {
    const navigate = useNavigate();

    // State for bankruptcy, terms, consent, and modal
    const [bankruptcy, setBankruptcy] = useState(null); // null for no selection, true/false for Yes/No
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [consentAccepted, setConsentAccepted] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = () => {
        // Check all validation conditions
        if (bankruptcy === null) {
            alert("You must indicate if you are planning on declaring bankruptcy.");
            return;
        }
        if (!termsAccepted || !consentAccepted) {
            alert("You must accept the terms and conditions and provide your consent to proceed.");
            return;
        }

        // Submit the form with the declaredBankruptcy field and other data
        const formData = {
            declaredBankruptcy: bankruptcy,
            termsAccepted,
            consentAccepted,
        };
        console.log("Form submitted:", formData);

        // Navigate to confirmation or handle form submission logic
        navigate('/confirmation');
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
                {/* Title */}
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
                    We're almost there!
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        mb: 3,
                        textAlign: 'center',
                        maxWidth: '800px',
                    }}
                >
                    Choose the type of loan you want and send your request.
                </Typography>

                {/* Bankruptcy Question */}
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '20px',
                        width: '100%',
                        maxWidth: '800px',
                        mb: 3,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 1,
                        }}
                    >
                        Are you planning on declaring bankruptcy or making a consumer proposal in the next 6 months?
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant={bankruptcy === true ? 'contained' : 'outlined'}
                                onClick={() => setBankruptcy(true)}
                                sx={{
                                    ...buttonStyles,
                                    backgroundColor: bankruptcy === true ? '#4CAF50' : 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                                }}
                            >
                                Yes
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant={bankruptcy === false ? 'contained' : 'outlined'}
                                onClick={() => setBankruptcy(false)}
                                sx={{
                                    ...buttonStyles,
                                    backgroundColor: bankruptcy === false ? '#4CAF50' : 'rgba(255, 255, 255, 0.1)',
                                    color: 'white',
                                    border: '1px solid rgba(255, 255, 255, 0.5)',
                                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' },
                                }}
                            >
                                No
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Warning Message */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#FCF596', // Red for warning
                            fontStyle: 'italic',
                            mt: 2,
                        }}
                    >
                        WARNING: If you declare bankruptcy or a consumer proposal before the end of your contract, you may be charged for fraud under the bankruptcy and insolvency law.
                    </Typography>
                </Box>

                {/* Terms and Conditions */}
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        padding: '20px',
                        width: '100%',
                        maxWidth: '800px',
                        mb: 3,
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        You must accept the terms and conditions.
                    </Typography>

                    {/* First Checkbox */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            mb: 2, // Add space between checkboxes
                        }}
                    >
                        <Checkbox
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            sx={{
                                color: 'white',
                                padding: '0 8px 0 0', // Ensure padding between checkbox and text
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                            }}
                        >
                            I confirm that all the information I have provided is accurate and that I accept the{' '}
                            <Button
                                onClick={() => setOpenModal(true)}
                                sx={{
                                    textDecoration: 'underline',
                                    color: '#FCF596',
                                    padding: 0,
                                    minWidth: 0,
                                    fontSize: 'inherit',
                                }}
                            >
                                terms and conditions
                            </Button>.
                        </Typography>
                    </Box>

                    {/* Second Checkbox */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Checkbox
                            checked={consentAccepted}
                            onChange={(e) => setConsentAccepted(e.target.checked)}
                            sx={{
                                color: 'white',
                                padding: '0 8px 0 0', // Ensure padding between checkbox and text
                            }}
                        />
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                            }}
                        >
                            By checking this box, I hereby consent to the transmission of my personal information provided herein to CreditBook Inc. for the purpose of adjudication, to provide products and services to customers and to manage, review and improve customer service and internal business processes. I understand that my personal information will be used in accordance with all applicable laws and regulations.
                        </Typography>
                    </Box>
                </Box>

                {/* IBV Section */}
                <Box
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        border: '2px solid #4CAF50',
                        borderRadius: '8px',
                        padding: '20px',
                        width: '100%',
                        maxWidth: '800px',
                        mb: 3,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            fontWeight: 'bold',
                            mb: 2,
                        }}
                    >
                        Loan without documents
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                        IBV technology (Instant Bank Verification) allows us to offer you a fast and secure service:
                    </Typography>
                    <ul style={{ color: 'rgba(255, 255, 255, 0.8)', marginTop: '10px' }}>
                        <li>Fast approval</li>
                        <li>Much simpler</li>
                        <li>100% safe</li>
                        <li>No paper document required</li>
                    </ul>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)', mt: 2 }}>
                        Once the request is sent, you will be automatically redirected to the IBV request.
                    </Typography>

                </Box>

                {/* Buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        maxWidth: '800px',
                        mt: 3,
                    }}
                >
                    <Button
                                            onClick={() => navigate('/step5')}
                                            variant="outlined"
                                            sx={buttonStyles}
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            onClick={handleSubmit}
                                            variant="contained"
                                            sx={buttonGreenStyles}
                                        >
                                            Send Request
                                        </Button>
                </Box>

                <Modal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '20px',
                            maxWidth: '800px',
                            width: '90%',
                            maxHeight: '90%',
                            overflowY: 'auto',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                mb: 3,
                                textAlign: 'center',
                            }}
                        >
                            Terms of Use
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 2, textAlign: 'justify', lineHeight: 1.6 }}>
                            Good morning,
                        </Typography>

                        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 2 }}>
                            These Terms of Use govern your credit application. When you apply for credit, you must accept these Terms of Use in order for your credit application to be processed by the lending company.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
                            WHO CAN APPLY FOR CREDIT?
                        </Typography>
                        <Typography variant="body1" component="ul" sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 2 }}>
                            <li>You must be at least 18 years old and not considered incapacitated or subject to guardianship.</li>
                            <li>The purpose of your credit application must not be made for an illegal, prohibited, or fraudulent purpose.</li>
                            <li>You have an obligation to reveal your full identity.</li>
                            <li>You may not impersonate others.</li>
                            <li>You have not had an application denied or an account closed within the past 30 days.</li>
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
                            COLLECTION AND USE OF INFORMATION
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 2 }}>
                            In order to process your credit application, the lending company must verify the information you provide. This may include personal details, metadata, or other data relevant to your application.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
                            JURISDICTION OF CREDIT APPLICATION AND DISPUTE MANAGEMENT
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 2 }}>
                            Any disputes will be governed by the laws of Quebec, Canada, and heard in the jurisdiction of the province of Quebec, in the legal district of Montreal.
                        </Typography>

                        <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, mb: 1 }}>
                            UPDATING THESE TERMS OF USE
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 3 }}>
                            The lending company may change its services and policies, and you will be notified before any changes take effect.
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6, mb: 3 }}>
                            (Terms of Use revised November 1, 2018).        </Typography>

                        <Button
                            onClick={() => setOpenModal(false)}
                            variant="contained"
                            sx={{
                                display: 'block',
                                margin: '0 auto',
                                backgroundColor: '#4CAF50',
                                '&:hover': { backgroundColor: '#45a049' },
                            }}
                        >
                            Close
                        </Button>
                    </Box>
                </Modal>

            </Box>
        </Layout>
    );
};

export default Step6;

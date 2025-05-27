import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

const Step1 = ({ setLoanData, loanData = {} }) => {
  const navigate = useNavigate();

  const defaultBasicInformation = loanData.basicInformation || {};

  // Local state pour les champs du formulaire
  const [formData, setFormData] = useState({
    firstName: defaultBasicInformation.firstName || "",
    lastName: defaultBasicInformation.lastName || "",
    birthday: defaultBasicInformation.birthday || "",
    languageCode: defaultBasicInformation.languageCode || "",
    cellPhone: defaultBasicInformation.cellPhone || "",
    primaryEmail: defaultBasicInformation.primaryEmail || "",
    amount: loanData.amount || "",
  });

  // Local state pour les erreurs
  const [errors, setErrors] = useState({});

  // Gérer les changements dans les champs
  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Réinitialiser les erreurs pour ce champ
  };

  // Valider les champs du formulaire
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required.";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
    if (!formData.birthday) tempErrors.birthday = "Date of Birth is required.";
    if (!formData.languageCode) tempErrors.languageCode = "Preferred Language is required.";
    if (!formData.cellPhone) tempErrors.cellPhone = "Mobile Number is required.";
    if (!formData.primaryEmail) tempErrors.primaryEmail = "Email Address is required.";
    if (!formData.amount) tempErrors.amount = "Loan Amount is required.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Passer à l'étape suivante
  const handleNext = () => {
    if (validateForm()) {
      const updatedLoanData = {
        ...loanData,
        basicInformation: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          birthday: formData.birthday,
          cellPhone: formData.cellPhone,
          primaryEmail: formData.primaryEmail,
          languageCode: formData.languageCode,
        },
        amount: formData.amount,
      };

      // Mettre à jour les données globales
      setLoanData(updatedLoanData);

      // Afficher l'objet JSON dans la console
      console.log("Loan Request JSON:", JSON.stringify(updatedLoanData, null, 2));

      // Naviguer vers l'étape suivante
      navigate("/step2");
    }
  };

  // Styles des champs
  const fieldStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    input: { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "rgba(255, 255, 255, 0.5)" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-focused": { color: "white" },
    },
    borderRadius: "10px",
  };

  const buttonStyles = {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    color: "white",
    padding: "10px 30px",
    fontSize: "1rem",
    borderRadius: "10px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      border: "2px solid rgba(255, 255, 255, 0.6)",
    },
  };

  const buttonGreenStyles = {
    ...buttonStyles,
    backgroundColor: "#4CAF50",
    "&:hover": {
      backgroundColor: "#4CAF50",
      boxShadow: "0 0 15px rgba(76, 175, 80, 0.6)",
      filter: "brightness(1.2)",
    },
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "0 20px",
        }}
      >
        <Box sx={{ textAlign: "center", padding: { xs: "20px", md: "30px" }, width: "100%" }}>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: 1.3,
            }}
          >
            Tell Us About Yourself – Your Journey Starts Here!
          </Typography>
        </Box>

        <Box component="form" sx={{ width: { xs: "90%", sm: "75%", md: "60%" }, gap: 3 }} noValidate>
          <Grid container spacing={3}>
            {/* Champs de formulaire */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.firstName}
                onChange={(e) => handleFieldChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.lastName}
                onChange={(e) => handleFieldChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date of Birth"
                type="date"
                variant="outlined"
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
                sx={fieldStyles}
                value={formData.birthday}
                onChange={(e) => handleFieldChange("birthday", e.target.value)}
                error={!!errors.birthday}
                helperText={errors.birthday}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Preferred Language"
                select
                variant="outlined"
                fullWidth
                required
                sx={{
                  ...fieldStyles,
                  "& .MuiSelect-select": { color: "white" },
                }}
                value={formData.languageCode}
                onChange={(e) => handleFieldChange("languageCode", e.target.value)}
                error={!!errors.languageCode}
                helperText={errors.languageCode}
              >
                <MenuItem value="F">Français</MenuItem>
                <MenuItem value="E">Anglais</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile Number"
                type="tel"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.cellPhone}
                onChange={(e) => handleFieldChange("cellPhone", e.target.value)}
                error={!!errors.cellPhone}
                helperText={errors.cellPhone}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                required
                sx={fieldStyles}
                value={formData.primaryEmail}
                onChange={(e) => handleFieldChange("primaryEmail", e.target.value)}
                error={!!errors.primaryEmail}
                helperText={errors.primaryEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="How Much Do You Need?"
                select
                variant="outlined"
                fullWidth
                required
                sx={{
                  ...fieldStyles,
                  "& .MuiSelect-select": { color: "white" },
                }}
                value={formData.amount}
                onChange={(e) => handleFieldChange("amount", e.target.value)}
                error={!!errors.amount}
                helperText={errors.amount}
              >
                {[250, 300, 400, 500, 600, 750, 800, 1000, 1250, 1500].map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}$
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Button onClick={() => navigate("/")} variant="outlined" sx={buttonStyles}>
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

export default Step1;

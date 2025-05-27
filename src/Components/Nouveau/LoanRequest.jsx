import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const LoanRequest = () => {
  // État global pour collecter les données utilisateur étape par étape
  const [loanData, setLoanData] = useState({});

  return (
    <Router>
      <Routes>
        {/* Route vers chaque étape */}
        <Route path="/step1" element={<Step1 loanData={loanData} setLoanData={setLoanData} />} />
        <Route path="/step2" element={<Step2 loanData={loanData} setLoanData={setLoanData} />} />
        <Route path="/step3" element={<Step3 loanData={loanData} setLoanData={setLoanData} />} />
        <Route path="/step4" element={<Step4 loanData={loanData} setLoanData={setLoanData} />} />
        <Route path="/step5" element={<Step5 loanData={loanData} setLoanData={setLoanData} />} />
        <Route path="/step6" element={<Step6 loanData={loanData} setLoanData={setLoanData} />} />
      </Routes>
    </Router>
  );
};

export default LoanRequest;

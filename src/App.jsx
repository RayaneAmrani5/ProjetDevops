import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ExistingClient from './Components/Client/ExistingClient'; 
import Step1 from './Components/Nouveau/step1';
import Step2 from './Components/Nouveau/step2';
import Step3 from './Components/Nouveau/step3';
import Step4 from './Components/Nouveau/step4';
import Step5 from './Components/Nouveau/step5';
import Step6 from './Components/Nouveau/step6';

function App() {
  // Créez un état global pour collecter les données du formulaire
  const [loanData, setLoanData] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/existing-client" element={<ExistingClient />} /> 
        <Route
          path="/Step1"
          element={<Step1 loanData={loanData} setLoanData={setLoanData} />}
        />
        <Route
          path="/step2"
          element={<Step2 loanData={loanData} setLoanData={setLoanData} />}
        />
        <Route
          path="/step3"
          element={<Step3 loanData={loanData} setLoanData={setLoanData} />}
        />
        <Route
          path="/step4"
          element={<Step4 loanData={loanData} setLoanData={setLoanData} />}
        />
        <Route
          path="/step5"
          element={<Step5 loanData={loanData} setLoanData={setLoanData} />}
        />
        <Route
          path="/step6"
          element={<Step6 loanData={loanData} setLoanData={setLoanData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

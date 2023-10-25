// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import PasswordPage from './components/password';
import MainPage from './components/main';


const App: React.FC = () => {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePasswordSubmit = (password: string) => {
    const isCorrect = password === '9768'; 

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsPasswordCorrect(isCorrect);
    }, 100);
  };

  return (
    <Router>
        <Routes>
          <Route path="/" element={isPasswordCorrect ? <Navigate to="/main" /> : <PasswordPage onPasswordSubmit={handlePasswordSubmit} />} />
          <Route path="/main" element={isLoading ? <div>Loading...</div> : <MainPage />} />
        </Routes>
    </Router>
  );
};

export default App;

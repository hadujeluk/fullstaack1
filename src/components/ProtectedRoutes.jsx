import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/firebase'; 

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; 

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
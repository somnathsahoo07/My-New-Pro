import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate('/dashboard');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 flex items-center space-x-2">
            <EmailIcon className="text-blue-600" />
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              required
              variant="filled"
              sx={{
                '& .MuiFilledInput-root': {
                  backgroundColor: '#4B5563',
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiFilledInput-root:hover': {
                  backgroundColor: '#374151',
                },
                '& .MuiFilledInput-root.Mui-focused': {
                  backgroundColor: '#4B5563',
                },
              }}
            />
          </div>
          <div className="mb-4 flex items-center space-x-2 relative">
            <LockIcon className="text-blue-600" />
            <TextField
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              variant="filled"
              sx={{
                '& .MuiFilledInput-root': {
                  backgroundColor: '#4B5563',
                  color: 'white',
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                },
                '& .MuiFilledInput-root:hover': {
                  backgroundColor: '#374151',
                },
                '& .MuiFilledInput-root.Mui-focused': {
                  backgroundColor: '#4B5563',
                },
              }}
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-white mt-4">
          Don't have an account?{' '}
          <a href="/Signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
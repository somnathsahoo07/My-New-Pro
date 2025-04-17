import React from 'react';
import { Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const navigate = useNavigate(); 

  const handleGoToDashboard = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800 text-white">
      <div className="text-center">
        <HomeIcon className="text-blue-400" style={{ fontSize: '4rem' }} />
        <Typography variant="h3" className="font-bold mt-4">
          Welcome to the Home Page
        </Typography>
        
        <div className="mt-6">
          <Button
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'blue',
            }}
            startIcon={<HomeIcon />}
            onClick={handleGoToDashboard} 
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
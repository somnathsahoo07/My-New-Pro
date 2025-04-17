import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; 

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate(); 

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-950 via-sky-900 to-cyan-800">
      
      <div
        className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
        style={{
          height: '100vh',
          padding: isCollapsed ? '0.5rem' : '1rem',
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          className="text-white mb-4"
          style={{
            alignSelf: isCollapsed ? 'center' : 'flex-end',
          }}
        >
          <MenuIcon />
        </IconButton>
        {!isCollapsed && (
          <Typography
            variant="h5"
            className="text-center font-bold mb-6"
            style={{ color: '#3b82f6' }}
          >
            Dashboard
          </Typography>
        )}
        <List>
          <ListItem
            button
            className="hover:bg-gray-700 rounded-md"
            onClick={() => navigate('/home')} 
          >
            <ListItemIcon>
              <HomeIcon className="text-white" />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Home" />}
          </ListItem>
          <ListItem
            button
            className="hover:bg-gray-700 rounded-md"
            onClick={() => navigate('/profile')} 
          >
            <ListItemIcon>
              <PersonIcon className="text-white" />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Profile" />}
          </ListItem>
        </List>
      </div>

      
      <div
        className="flex-1 p-6"
        style={{
          backgroundColor: 'transparent',
        }}
      >
        <Typography variant="h4" className="font-bold mb-4 text-white text-center">
          Welcome to the Dashboard..!!
        </Typography>

      </div>
    </div>
  );
}

export default Dashboard;
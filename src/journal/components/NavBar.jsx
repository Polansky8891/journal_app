import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LogoutOutlined from '@mui/icons-material/LogoutOutlined';
import MenuOutlined from '@mui/icons-material/MenuOutlined';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';



export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );

  }
  return (
    <AppBar 
      position='fixed'
      sx={{ 
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Typography variant='h6' noWrap component='div'>
          JournalApp
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton 
            color='error'
            onClick={ onLogout }
        >
          <LogoutOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

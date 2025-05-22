import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"



export const SideBar = ({ drawerWidht = 240 }) => {

    const { displayName } = useSelector( state => state.auth );
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidht}, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidht}

            }}
        
        >
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero','Febrero','Marzo','Abril'].map( text => (
                        <ListItem key={ text } disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'afweffawefa awefawe fa wef e fewfwe fa '} />

                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>


        </Drawer>

    </Box>
  )
}

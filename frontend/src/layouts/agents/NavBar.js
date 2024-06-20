import React, { Component } from 'react'
import { AppBar, Breadcrumbs, Grid, IconButton, Link, TextField, Toolbar, Typography } from '@mui/material'
// import { Home } from '@mui/icons-material'
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const useStyles = makeStyles({
    profile: {
        position: 'relative', left: '630px', bottom: '24px'
    },
    textfield: {
        position: 'relative', left: '700px',top:"8px"
    }
});


function NavBar() {

    const style = useStyles()

    return (
        <Grid sm='10' >
            <AppBar position='fixed' sx={{ backgroundColor: 'white', height: '80px', width: '1260px' }}  >
                <Toolbar >
                    <Typography variant='h5' sx={{ color: '#0D80D8', fontWeight: 'bold', position: 'relative', top:"7px",left:"20px" }}>Cust Care</Typography>
                    <TextField label='Search here' size='small' className={style.textfield}>

                    </TextField>

                    <IconButton size='small' className={style.profile}>
                        <AccountCircleIcon color='black' />
                    </IconButton>
                    <IconButton size='small' className={style.profile} >
                        <SettingsIcon />
                    </IconButton>
                    <IconButton size='small' className={style.profile}>
                        <NotificationsIcon />
                    </IconButton>



                </Toolbar>
            </AppBar>
        </Grid>
    )

}

export default NavBar
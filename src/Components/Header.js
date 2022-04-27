
import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles"
import { AppBar, IconButton, Toolbar, Collapse} from "@material-ui/core"
import SortIcon from '@mui/icons-material/Sort';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
function IconImg(props) {
    
    const useStyles = makeStyles(() => ({
        icon: {
            '& svg': {
                fontSize: "2.3rem",
                color: "white"
            },

        },
        iconGithub: {
            '& svg': {
                fontSize: "2.3rem",
                color: "white",
            },

        },
        contact: {


            "&.MuiButton-root": {
                fontSize: "1.7vh",
                fontFamily: "Nunito",
                fontWeight: "bold",
                height: "6vh",
                minWidth: "10rem",
                color: "#fff",
                border: "0px",
            },


            fontSize: "3rem"
        },
        resume: {
            "&.MuiButton-root": {
                border: "0px",
                fontSize: "1.7vh",
                fontFamily: "Nunito",
                color: "#fff",
                fontWeight: "bold",
                height: "6vh",

            },


            fontSize: "3rem"
        }


    }))
    const classes = useStyles();
    if (props.width < 600) {
        return (
            <div >
                <IconButton className = {classes.icon}>
                    <SortIcon/>  
                </IconButton>
                    
            </div>
        )
    } else {
        return (
            <div>
                <Grid container justify = "space-around" spacing = {2}>
                    <Grid item xs={3}>
                        <IconButton className = {classes.iconGithub}>
                            <GitHubIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <IconButton className = {classes.iconGithub}>
                            <LinkedInIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={3}>
                        <Button className = {classes.resume} variant="text" >Resume</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button className = {classes.contact} variant="text" disableElevation>Contact Me</Button>

                    </Grid>
                    
                </Grid>
            </div>
        )
    }
    

};

function Header() {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        setWidth(window.innerWidth);
        console.log(width);
    })
    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'Nunito',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        },
        appbar: {
            background: '#FF9899'
        },
        colorText: {
            color: "#ffff0d"
        },
        appbarTitle: {
            flex: "1",
            fontSize: "2rem"
        },
        appbarWrapper: {
            width: "80%",
            margin: "0 auto"
        },
        
        container: {
            textAlign: 'center',
        },
        title: {
            color: '#fff',
            fontSize: '4rem',
        },
        goDown: {
            color: '#fff',
            fontSize: '4rem',
        },
    }));
    const classes = useStyles();
    return( 
        <div className = {classes.root} id = "main">
            <AppBar className = {classes.appbar} elevation = {0}>
                <Toolbar className = {classes.appbarWrapper}>
                    <h1 className = {classes.appbarTitle}>My <span className = {classes.colorText}>Website </span></h1>
                    {/* <IconButton className = {classes.icon}>
                        <SortIcon  />
                    </IconButton> */}
                    <IconImg width = {width} />
                    
                </Toolbar>
                
            </AppBar>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br />
                        <span className={classes.colorText}>My Website</span>
                    </h1>
                    <Scroll to="aboutme" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
            </div>
    )

}
// fix for import icon override: https://stackoverflow.com/questions/36482126/how-to-enlarge-the-svg-icon-in-material-ui-iconbuttons

export default Header;
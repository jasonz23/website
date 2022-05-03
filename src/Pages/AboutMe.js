import { makeStyles } from "@material-ui/core";
import React from 'react';
import InfoCard from "../Components/InfoCard";
import Grid from '@mui/material/Grid';
import AboutInfo from "../Static/AboutInfo";
function AboutMe() {
    const useStyles = makeStyles(() => ({
        root: {
            background: "#bdbdbd",
            display: "flex",
            alignContent: "center",
            justifyContent: "center"

        },

    }))
    const classes = useStyles();
    return(
        <div className = {classes.root} id = "aboutme" >
            <Grid container 
            direction = "row"  alignContent = "center" justifyContent = "center">
                <Grid item sx = {{
                    mt: {xs: 5, md: 10, lg: 10},
                    width: 0.8,

                    }} >
                    <InfoCard info = {AboutInfo[0]} />
                </Grid>
                <Grid item sx = {{  
                    mt: {xs: 5, md: 5, lg: 10},
                    width: 0.8,

                    }}>
                    <InfoCard info = {AboutInfo[1]}/>
                </Grid>
            
                        
            </Grid>
            
        </div>

    )
}

export default AboutMe;
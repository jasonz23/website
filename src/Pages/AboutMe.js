import { makeStyles } from "@material-ui/core";
import React from 'react';
import InfoCard from "../Components/InfoCard";
import Grid from '@mui/material/Grid';
import AboutInfo from "../Static/AboutInfo";
function AboutMe() {
    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            background: 'linear-gradient(45deg,#FF8E53 120% ,#FE6B8B 100% )',
            display: "flex",
            alignContent: "center",
            justifyContent: "center"

        },
        item: {
            width: "80vw",
            height: "30vh"
        }
    }))
    const classes = useStyles();
    return(
        <div className = {classes.root} id = "aboutme" >
            <Grid container direction = "column"  alignContent = "center" justifyContent = "center">
                <Grid item className = {classes.item}>
                    <InfoCard info = {AboutInfo[0]} />
                </Grid>
                <Grid item className = {classes.item}>
                    <InfoCard info = {AboutInfo[1]}/>
                </Grid>
            
                        
            </Grid>
            
        </div>

    )
}

export default AboutMe;
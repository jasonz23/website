import { makeStyles } from "@material-ui/core";
import React from 'react';
import InfoCard from "../Components/InfoCard";
import Grid from '@mui/material/Grid';
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
            width: "80vw"
        }
    }))
    const classes = useStyles();
    return(
        <div className = {classes.root} id = "aboutme" >
            <Grid container direction = "column" rowSpacing = {10} alignContent = "center" justifyContent = "center">
                <Grid item className = {classes.item}>
                    <InfoCard  />
                </Grid>
                <Grid item className = {classes.item}>
                    <InfoCard />
                </Grid>
            
                        
            </Grid>
            
        </div>

    )
}

export default AboutMe;
import { makeStyles } from "@material-ui/core";
import React from 'react';

function AboutMe() {
    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh"
        }
    }))
    const classes = useStyles();
    return(
        <div className = {classes.root} id = "aboutme">
            cow
        </div>

    )
}

export default AboutMe;
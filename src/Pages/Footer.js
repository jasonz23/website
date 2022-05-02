import { makeStyles } from "@material-ui/core";
import React from "react"

function Footer() {
    const useStyles = makeStyles(() => ({
        root: {
            height: "10vh",
            background: '#524457',
            fontFamily: "Nunito",
            color: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            

        },

    }));
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            

            <h2>
                Built By Jason Zhao using React
            </h2>

        </div>
    )
}

export default Footer;
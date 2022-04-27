import { CardContent, makeStyles } from "@material-ui/core";
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
function InfoCard() {
    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            background: 'linear-gradient(45deg,#FF8E53 120% ,#FE6B8B 100% )'

        }
    }))
    const classes = useStyles();
    return(
        <div>
            <Card sx = {{}}>
                <CardContent>
                    <h1>Cow</h1>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoCard;
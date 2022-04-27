import { makeStyles, Container } from "@material-ui/core";
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function InfoCard(props) {
    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            background: 'linear-gradient(45deg,#FF8E53 120% ,#FE6B8B 100% )'

        }
    }))
    const classes = useStyles();
    return(
        <div>
            <Card sx = {{
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
                alignItems: "center",
                
            }}>
                <Box
                component = "img"
                sx = {{
                    
                    width: {xs: 1, md: 0.4},
                    height: 0.3,
                }}
                alt = "UBC"
                src = {props.info.img}
                >
                

                </Box>
                <Grid container display = "flex" flexDirection= " column" alignItems = "center" justifyContent = "flex-start" 
                sx = {{
                    p: 3
                }}>
                    <Grid item>
                        <Typography variant = "h2" fontFamily= "Nunito" fontWeight = "bold"> {props.info.title}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant = "h5" fontFamily= "Nunito">{props.info.bio}</Typography>
                    </Grid>
                </Grid>

            </Card>
        </div>
    )
}

export default InfoCard;
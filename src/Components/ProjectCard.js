import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard(props) {
    const styles = {
        root: {
            maxHeight: "25vh",
            minHeight: "25vh",
        },
        title: {

            color: 'black',
            fontFamily: "Nunito",
            fontWeight: "bold",
            size: "4rem",
        },
        bio: {
            color: 'black',
            fontFamily: "Nunito",
            fontWeight: "bold",
            size: "4rem",
        },

}
    return (
        <div id = "projects" className = {styles.root}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    
                    component= "img"
                    height = "200"

                    image= {props.projectInfo.img}
                    alt="green iguana"
                    
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" style = {styles.title}>
                        {props.projectInfo.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style = {styles.bio}>
                        {props.projectInfo.bio}
                    </Typography>
                </CardContent>
                <CardActions align = "right">
                    <Button size="small" onClick = {() => {
                        window.open(
                                props.projectInfo.link,
                                '_blank' // <- This is what makes it open in a new window.
                            );
                    }}>
                        <LinkIcon />
                        </Button>
                    <Button size="small" onClick = {() => {
                        window.open(
                                props.projectInfo.github,
                                '_blank' // <- This is what makes it open in a new window.
                            );
                    }}>
                        <GitHubIcon />
                        </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectCard;
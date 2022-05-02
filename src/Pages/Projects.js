import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ProjectCard from "../Components/ProjectCard"
import Grow from '@mui/material/Grow';
import { AddBoxOutlined } from "@material-ui/icons";
import ProjectInfo from "../Static/ProjectInfo"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tabpanel-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography   >{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `project-tab-${index}`,
    'aria-controls': `project-tabpanel-${index}`,
  };
}
function Projects() {
    const useStyles = makeStyles((theme) => ({
        root: {
            
            height: "100vh",
            background: 'linear-gradient(45deg,#FF8E53 120% ,#FE6B8B 100% )',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        },
        title: {
            
            fontFamily: "Nunito",
            fontWeight: "bold",
            color: "white",
            fontSize: "4rem",
            margin : "0"
            

        },
        tabs: {
            "&.MuiTabs-root": {
                
            }
        },
        tab: {
            "&.MuiTab-root": {
                color: "#fff",
                fontFamily: "Nunito",
                fontWeight: "bold"
            },
            "&.Mui-selected": {
                background: "none",
                color: "#ffff0d",
                fontFamily: "Nunito",
                fontWeight: "bold"
            }
        }


    }));
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const classes = useStyles();
    return (
        <div className = {classes.root} id = "projects">
            <Box>
                <h1 className = {classes.title} >
                My Projects
                </h1>  
            </Box>
                <Box >
                    <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    aria-label="Project Tabs" 
                    centered
                    className = {classes.tabs}
                    >
                        <Tab label="All" {...a11yProps(0)} className = {classes.tab}/>
                        <Tab label="Java " {...a11yProps(1)} className = {classes.tab}/>
                        <Tab label="React" {...a11yProps(2)} className = {classes.tab}/>
                        <Tab label="Python" {...a11yProps(3)} className = {classes.tab}/>
                    </Tabs>
            </Box>      
            <Box >

            
                <TabPanel value={value} index={0} >
                    <Grid container display = "flex" justifyContent = "center" alignItems = "center" spacing = {1}>
                        <Grid item xs = {6} md = {4} lg = {4}>
                            <ProjectCard projectInfo = {ProjectInfo[1]}/>
                        </Grid>
                        <Grid item xs = {6} md = {4} lg = {4}>
                            <ProjectCard projectInfo = {ProjectInfo[2]}/>
                        </Grid>
                        <Grid item xs = {6} md = {4} lg = {4}>
                            <ProjectCard projectInfo = {ProjectInfo[3]}/>
                        </Grid>
                        <Grid item xs = {6} md = {4} lg = {4}>
                            <ProjectCard projectInfo = {ProjectInfo[4]}/>
                        </Grid>
                        <Grid item xs = {6} md = {4} lg = {4}> 
                         
                        </Grid>
                        <Grid item xs = {6} md = {4} lg = {4}>

                        </Grid>
                    </Grid>
                </TabPanel>
    
                <TabPanel value={value} index={1} >
                    <Grid container display = "flex" justifyContent = "center" alignItems = "center" spacing = {1}>
                        <Grid item  >
                            <ProjectCard projectInfo = {ProjectInfo[2]}/>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} >
                    <Grid container  display = "flex" justifyContent = "center" alignItems = "center" spacing = {1} >
                        <Grid item xs = {6} md = {4} lg = {4}>
                            <ProjectCard projectInfo = {ProjectInfo[2]}/>
                        </Grid>
                        <Grid item xs = {6} md = {4} lg = {4}>
                            <ProjectCard projectInfo = {ProjectInfo[4]}/>
                        </Grid>

                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3} >
                    <Grid container display = "flex" justifyContent = "center" alignItems = "center" spacing = {1}>
                        <Grid item  >
                            <ProjectCard projectInfo = {ProjectInfo[3]}/>
                        </Grid>

                    </Grid>
                </TabPanel>

            </Box>
        </div>
    );
}

export default Projects
import { makeStyles } from "@material-ui/core";
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ProjectCard from "../Components/ProjectCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Project() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const useStyles = makeStyles(() => ({
        root: {
            height: "110vh",
            background: 'linear-gradient(45deg,#FF8E53 120% ,#FE6B8B 100% )',
            display: "flex",
            alignContent: "center",
            justifyContent: "center"

        },
        title: {
            color: "#fff",
            fontFamily: "Nunito",
            fontWeight: "bold",
            fontSize: "4rem"
        }

    }))
    const classes = useStyles();
    return(
        <div className = {classes.root}>
            <Box flexDirection= "column" alignItems= "center" justifyContent = "center">
                <Box>
                <h1 className = {classes.title}>Projects</h1>
                </Box>
                <Box>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label = "one"  {...a11yProps(0)} />
                        <Tab label = "two"  {...a11yProps(1)} />
                        <Tab label = "three" {...a11yProps(2)}  />
                    </Tabs>

                </Box>
                <TabPanel value={value} index={0}>
                    <ProjectCard />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </Box>
            
            
        </div>
    )
}

export default Project;
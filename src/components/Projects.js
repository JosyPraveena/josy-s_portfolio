import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import projectdetails from '../projectDetails';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      maxHeight: 250,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      //    transform: "rotate(180deg)",
    },
    typography: {
      fontWeight: 600,
      color: "black",
    },
    buttons: {
      fontWeight: "bolder",
      backgroundColor: "#94e7dc",
      fontFamily: "Permanent Marker",
      color: "black",
    },
    para: {
      fontWeight: "900",
      fontFamily: "Inconsolata",
    },
    info: {
      fontFamily: "Permanent Marker",
       color: "#94e7dc",
      textShadow: '2px 2px black'
    },
    "&:hover": {
      transform: "translateY(-5px)",
      color: "#94e7dc",
    },
  })
);

const Project = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
    <div style={{backgroundColor:'#e5eaeb'}}>
      <div className="project-heading" id="project-section-scroll" style={{paddingTop:'5px'}}>

Projects
</div> 
      <div className="projects-section" id="projects"   >
       <div style={{backgroundColor:'#e5eaeb'}}></div>
        <div id="project-container">
       
       { projectdetails && projectdetails.map( each => <div className= "flip-card" >
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={each.project_image}
                  title="comicstore"
                />
                <CardContent>
                  <Typography variant="h5" className={classes.typography}>
                    {each.project_name}
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="flip-card-back">
              <img src={each.project_image} alt="ecommerce site" />
              <div id="buttons-on-image">
                <Button
                  variant="contained"
                  size="large"
                  href={each.project_link}
                  className={classes.buttons}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  size="large"
                  href={each.project_githublink}
                  className={classes.buttons}
                >
                  github
                </Button>
              </div>
              <Card className={classes.root}>
              <CardActions disableSpacing className="card-actions">
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <Typography variant="h5" className={classes.info}>
                    Info
                  </Typography>
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <Typography variant="body1" className={classes.para}>
                    <Typography variant="h5"  className={classes.para}>Stack</Typography>
                   {each.project_info}
                  </Typography>
              </Collapse>
              </Card>
            </div>
          </div>
        </div>)}
        </div>
        
      </div>
      </div>
    </>
  );
};

export default Project;

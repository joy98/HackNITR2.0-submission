import React, { useContext } from "react";

import { Link } from "react-router-dom";

import {
  Avatar,
  Typography,
  Grid,
  Container,
  Button,
  Paper,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

import useStyles from "./styles";
import UserContext from "../../context/UserContext";

export default function Dashboard() {
  const { userData } = useContext(UserContext);
  const classes = useStyles();

  const post = {
    title:
      "Welcome to Wellfit " +
      userData.user.FIRST +
      " " +
      userData.user.LAST +
      "!",
    description: "We help you to stay healthy and live a Healthy life",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Navigate to our various applications in the side pannel",
  };

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        <Paper
          className={classes.mainFeaturedPost}
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <img
            style={{ display: "none" }}
            src={post.image}
            alt={post.imageText}
          />
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography
                  component="h1"
                  variant="h3"
                  color="inherit"
                  gutterBottom
                >
                  {post.title}
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" href="#">
                  {post.linkText}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 10,
                }}
              >
                <Avatar
                  className={classes.large}
                  src="https://avatars.dicebear.com/api/male/adas.svg"
                  alt="avatar"
                />
              </div>
              <Typography variant="h5">Welcome</Typography>
              <Typography variant="h5">
                {userData.user &&
                  userData.user.FIRST + " " + userData.user.LAST}
              </Typography>
              <Typography variant="h5">
                Expenses:
                <strong>
                  {userData.user && " " + userData.user.HEALTHCARE_EXPENSES}
                </strong>
              </Typography>
              <Typography variant="h5">
                Coverage:{" "}
                <strong>
                  {userData.user && " " + userData.user.HEALTHCARE_COVERAGE}
                </strong>
              </Typography>
              <div className={classes.logoutBTN}>
                <FavoriteIcon color="secondary" />
                <Typography variant="h5">
                  {userData.user && "  " + userData.user.POINTS}
                  (Points)
                </Typography>
              </div>
              <div className={classes.logoutBTN}>
                <FitnessCenterIcon color="secondary" />
                <Typography variant="h5">
                  {userData.user && "  " + userData.user.CALORIE}(Cal)
                </Typography>
              </div>
              <div className={classes.logoutBTN} style={{ margin: 20 }}>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/exercise"
                >
                  Go to exercise
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

import React from "react";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Box from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    fontWeight: "bold",
    letterSpacing: 1.5,
  },

  toolbar: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: { flexDirection: "row" },
  },

  menuBox: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-end",
      justifyContent: "space-between",
    },
  },

  menuOption: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: { paddingLeft: theme.spacing(3) },
  },
}));

export default function NavigatonBar() {
  const classes = useStyles();

  return (
    <Container>
      <Toolbar className={classes.toolbar}>
        <Typography component='h1' variant='h4' className={classes.siteTitle}>
          Mammoth Interactive
        </Typography>
        <Box className={classes.menuBox}>
          {["home", "courses", "sign up"].map((menuOption) => (
            <Link
              component='button'
              variant='body1'
              className={classes.menuOption}
            >
              {menuOption.toUpperCase()}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}

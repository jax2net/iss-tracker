import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles }from '@material-ui/core/styles';
import { createMuiTheme }from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Helvetica'
    }
})


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
        paper: {
            marginTop: '100px',
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
}));

const Card = (props) => {
    const classes = useStyles();
    return(
        <div className={classes.root} theme={theme}> 
            <Grid container spacing={3} justify="center">
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <b>NASA's APOD</b>
                        <img width="300" height="200" src={props.apod[0]} style={{marginTop: 10}}></img>
                        <br />
                        <span>Copyright {props.apod[1]}, {props.apod[2]}</span>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    ); 
}



export default Card;

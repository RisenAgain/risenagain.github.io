import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from './Header';

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Grid container spacing={2}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={8}>
                        <Paper>
                            
                        </Paper>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
            </div>
        )
    }
}
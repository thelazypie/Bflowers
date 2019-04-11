import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper/Paper'

import grey from '@material-ui/core/colors/grey';
export default class Footer extends Component {
    render() {
        return(
            <Paper color={grey[300]} >
            <Grid style={{padding: "2em 0em"}} container>
                <Grid style={{padding:'1em'}} lg={4} md={4} sm={4} xs={12} item>
                    <Typography variant='h6'>Телефон: 8-800-555-35-35</Typography>
                    <Typography variant='h6'>Эл.почта: mail@mail.com</Typography>
                </Grid>
                <Grid lg={4} md={4} sm={4} xs={12} item>
                    <Typography variant='h3'>Miyazaki Technologies.inc</Typography>
                    <Typography variant='h6'>Copyright 2019</Typography>
                </Grid>
                <Grid lg={4} md={4} sm={4} xs={12} item>
                    <Typography variant='h5'>愛してる</Typography>
                </Grid>
            </Grid>
            </Paper>
        )
    }
}
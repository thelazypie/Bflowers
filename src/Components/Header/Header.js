import React,{Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import fetch from 'node-fetch';

import logo from './logo.png';

import "./header.css"

export default class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {town: "Неизвестно"};
    }
    componentDidMount() {
        fetch("http://ip-api.com/json")
            .then(res=> res.json())
            .then(json=> this.setState({town: json.city}));
    }
    render() {
        return(
            <AppBar position="static">
                <Toolbar>
                <Grid container justify="flex-start" alignItems="center">
                        <Avatar className="logo" alt="sukkulent" src={logo} />
                        <Typography variant="title" color="inherit">BotaniCraft</Typography>
                </Grid>
                
                <Grid container justify="flex-end" alignItems="center">
                <Typography variant="h6" color="inherit">Ваш город: {this.state.town}</Typography>
                    <Grid style={{padding:20}} item>
                        <Typography className="pointer" variant="h6" color="inherit"><a href="/">Главная</a></Typography>
                    </Grid>
                    <Grid style={{padding:20}} item>
                        <Typography className="pointer" variant="h6" color="inherit"><a href="/accessories">Акксессуры</a></Typography>
                    </Grid>
                    <Grid style={{padding:20}} item>
                        <Typography className="pointer" variant="h6" color="inherit"><a href="/delivery">О доставке</a></Typography>
                    </Grid>
                    <Grid style={{padding:20}} item>
                        <Typography className="pointer" variant="h6" color="inherit"><a href="/about">О нас</a></Typography>
                    </Grid>
                </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

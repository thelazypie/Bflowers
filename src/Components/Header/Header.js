import React,{Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import fetch from 'node-fetch';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

import Drawer from '@material-ui/core/Drawer'

import logo from './logo.png';

import "./header.css"

export default class Header extends Component {

        constructor(props) {
        super(props);

        this.state = {town: "Неизвестно",modalShow: false,driwerOpen:false, townNew: ""};

        this.showModal = this.showModal.bind(this)
    }
    componentDidMount() {
        fetch("http://ip-api.com/json")
            .then(res=> res.json())
            .then(json=> this.setState({town: json.city}));
    }

    toggleDrawer(state) {
        this.setState({driwerOpen:state})
    }

    showModal(e) {
        e.preventDefault();
        this.setState({modalShow: !this.state.modalShow});
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
                <Typography className="none" variant="h6" onClick={()=>{this.toggleDrawer(true)}} color="inherit">Ваш город: {this.state.town}</Typography>
                    <Grid item>
                        <Typography style={{padding:20}} className="pointer" variant="h6" color="inherit"><a href="/">Главная</a></Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{padding:20}} className="pointer" variant="h6" color="inherit"><a href="/accessories">Акксессуры</a></Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{padding:20}} className="pointer" variant="h6" color="inherit"><a href="/delivery">О доставке</a></Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{padding:20}} className="pointer" variant="h6" color="inherit"><a href="/about">О нас</a></Typography>
                    </Grid>
                </Grid>
                </Toolbar>
                <Drawer anchor="top" open={this.state.driwerOpen} onClose={()=>{this.toggleDrawer(false)}}>
                    <Input fullWidth name="name" onChange={(e)=>{e.preventDefault(); this.setState({townNew: e.target.value})}} placeholder="Не ваш город? введите его!" type="text"/>
                    <Button onClick={()=>{this.setState({town: this.state.townNew === ""? this.state.town : this.state.townNew }); this.toggleDrawer(false)}}>OK</Button>
                </Drawer>
            </AppBar>
        )
    }
}

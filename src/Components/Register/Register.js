import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';

import axios from 'axios';

// import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            password: "",
            someEmpty : false,
        };
        this.send = this.send.bind(this);
        this.handleChangeN = this.handleChangeN.bind(this);
        this.handleChangeE = this.handleChangeE.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
    }

    send(e) {
        e.preventDefault();
        // this.setState({name: e.target.value});
        // console.log(this.state);
        
        if(this.state.name.length === 0 || this.state.email.length === 0 || this.state.password.length === 0) {
          this.setState({someEmpty: true});
        } else {
          this.setState({someEmpty: false});
          axios.get(`/reg?name=${this.state.name}&email=${this.state.email}&password=${this.state.password}&access=user`).then((res)=>console.log(res));
        }
        
      }
      handleChangeN(e) {
        e.preventDefault();
        this.setState({name: e.target.value});
      }
      handleChangeE(e) {
        e.preventDefault();
        this.setState({email: e.target.value});
      }
      handleChangeP(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
      }

    render() {
        return(
            <div className="Register">
            <Typography variant="h4" align="center">Регистрация</Typography>
            <Grid style={{height:'100%'}} container alignContent="center">
                
                <FormControl fullWidth>
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeN} fullWidth name="name" placeholder="Введите Логин" type="text">Login</Input>  
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeE} fullWidth name="email" placeholder="Введите эл. почту" type="email">Email</Input>
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeP} fullWidth name="password" placeholder="Введите Пароль" type="password">Passoword</Input>                 
                    
                    <Button onClick={this.send}>Отправить</Button>
                    <Typography variant="overline">{this.state.someEmpty? "У вас есть пустые поля, мех" : ""}</Typography>                                         
                </FormControl>
                <Typography variant="headline" align="center">Уже зарегистрированы?<a href="/logIn">Войти</a></Typography>
            </Grid>
          </div>
        )
    }
}
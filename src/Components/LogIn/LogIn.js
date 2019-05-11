import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import {Redirect} from 'react-router-dom'

import axios from 'axios';

// import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email:"",
            password: "",
            someEmpty : false,
            logged: false
        };
        this.send = this.send.bind(this);
        this.handleChangeN = this.handleChangeN.bind(this);
        this.handleChangeE = this.handleChangeE.bind(this);
        this.handleChangeP = this.handleChangeP.bind(this);
    }

    async send(e) {
        e.preventDefault();
        // this.setState({name: e.target.value});
        // console.log(this.state);
        
        if(this.state.name.length === 0 || this.state.password.length === 0) {
          this.setState({someEmpty: true});
        } else {
          this.setState({someEmpty: false});
          //Дописать
          //axios.get(`/login?name=${this.state.name}&password=${this.state.password}`).then((res)=>console.log(res));
          const data = {
              "name": this.state.name,
              "password": this.state.password
          }
          
          await axios.post(`/login`,data)
            .then((res)=>{
                console.log(res)
                document.cookie=`user=${res.data.message.user};path=/;expires=${new Date(new Date().getTime() + 3000 * 1000)}`;
                document.cookie=`email=${res.data.message.email};path=/;expires=${new Date(new Date().getTime() + 3000 * 1000)}`;
                document.cookie=`trash=${JSON.stringify(res.data.message.trash)};path=/;expires=${new Date(new Date().getTime() + 3000 * 1000)}`;
                this.setState({logged:true});
            });

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
            <Typography variant="h4" align="center">Вход</Typography>
            <Grid style={{height:'100%'}} container alignContent="center">
                
                <FormControl fullWidth>
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeN} fullWidth name="name" placeholder="Введите Логин" type="text">Login</Input>  
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeP} fullWidth name="password" placeholder="Введите Пароль" type="password">Passoword</Input>                 
                    
                    <Button onClick={this.send}>Войти</Button>
                    <Typography variant="overline">{this.state.someEmpty? "У вас есть пустые поля, мех" : ""}</Typography>                                         
                </FormControl>
                {this.state.logged? <Redirect to="/" /> : ""}
            </Grid>
          </div>
        )
    }
}
import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';

import axios from 'axios';

// import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class About extends Component {

  constructor(props) {
    super(props);

    this.send = this.send.bind(this);
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeE = this.handleChangeE.bind(this);
    this.handleChangeM = this.handleChangeM.bind(this);

    this.state = {
        name: "",
        email:"",
        message: "",
        someEmpty: false
    }

  }

  send(e) {
    e.preventDefault();
    // this.setState({name: e.target.value});
    // console.log(this.state);
    
    if(this.state.name.length === 0 || this.state.email.length === 0 || this.state.message.length === 0) {
      this.setState({someEmpty: true});
    } else {
      this.setState({someEmpty: false});
      axios.get(`/setQuestion?name=${this.state.name}&email=${this.state.email}&message=${this.state.message}`).then((res)=>console.log(res));
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
  handleChangeM(e) {
    e.preventDefault();
    this.setState({message: e.target.value});
  }
  render() {
    return (
          <div className="About">
            <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae00f2977a67cf1cf6bcbb92dc8f692a5cbcc49d986b22ed54396c0a4d77142f5&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>
            <Typography variant="h4" align="center">Есть вопросы? Задайте их нам</Typography>
            <Grid style={{padding:"0em 4em"}} container alignContent="center">
                
                <FormControl fullWidth>
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeN} fullWidth name="login" placeholder="Введите Логин" type="text">Name</Input>  
                    <Input style={{padding:"1em 0em"}} onChange={this.handleChangeE} fullWidth name="email" placeholder="Введите эл. почту" type="email">Email</Input>                 
                    <TextField style={{padding:"1em 0em"}} onChange={this.handleChangeM} placeholder="Ваше сообщение" fullWidth name="message"/>
                    <Button onClick={this.send}>Отправить</Button>
                    <Typography variant="overline">{this.state.someEmpty? "У вас есть пустые поля, мех" : ""}</Typography>                                         
                </FormControl>

            </Grid>
          </div>
    );
  }
}

export default About;
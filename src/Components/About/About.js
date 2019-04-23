import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class About extends Component {

  send() {

  }
  render() {
    return (
          <div className="About">
            <iframe title="map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae00f2977a67cf1cf6bcbb92dc8f692a5cbcc49d986b22ed54396c0a4d77142f5&amp;source=constructor" width="100%" height="720" frameborder="0"></iframe>
            <Typography variant="h4" align="center">Есть вопросы? Задайте их нам</Typography>
            <Grid style={{padding:"0em 4em"}} container alignContent="center">
                
                <FormControl fullWidth>
                    <Input style={{padding:"1em 0em"}} fullWidth name="login" placeholder="Введите Логин" type="text">Name</Input>  
                    <Input style={{padding:"1em 0em"}} fullWidth name="email" placeholder="Введите эл. почту" type="email">Email</Input>                 
                    <TextField style={{padding:"1em 0em"}} placeholder="Ваше сообщение" fullWidth name="message"/>
                    <Button>Отправить</Button>                                         
                </FormControl>

            </Grid>
          
          </div>
    );
  }
}

export default About;
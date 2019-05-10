import React,{Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

export default class Me extends Component {
    constructor(props) {
        super(props)
    }

    getCookie(name) {
        var matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
    
    render() {
        return (
            <div className="me">
                <Grid container>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <div>
                            <Avatar style={{margin:"1em",width:"128px", height:"128px"}}>{this.getCookie('user').slice(0,1).toUpperCase()}</Avatar>
                            <Typography align="" variant="title">Имя: {this.getCookie('user')}</Typography>
                            <Typography align="" variant="title">Эл. почта: {this.getCookie('email')}</Typography>
                        </div>
                        <Button variant="outlined" onClick={(e)=>{
                            console.log('poka')
                            document.cookie = "user; path=/; expires=" + new Date(0).toUTCString();
                            document.cookie = "email; path=/; expires=" + new Date(0).toUTCString();
                        }}>Выйти</Button>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant="h4">Мои заказы:</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios'

// import InputLabel from '@material-ui/core/InputLabel';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'


class Accessories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: [],
          modalTitle: '',
          modalDesc: '',
          modalLink: '',
        };
    }

    getCookie(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
    }

  componentDidMount() {
    axios.post('/getAccessories')
    .then(response => {
        let data = JSON.parse(response.request.response)
        this.setState({data: data.data.accessories});
    }); //{data:response.request.response
  }


  render() {
    return (
          <div className="Accessories">
            <Grid container>
           {
              this.state.data.map((chunk,index)=>{
                
                return(
                    <Grid key={index} style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card onClick={(e)=>{
                      this.setState({
                        modalOpen:true,
                        modalTitle: chunk.name,
                        link: chunk.link,
                        modalDesc: chunk.description
                      })
                    }}>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image={chunk.link}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">{chunk.name}</Typography>
                                <Typography >{chunk.description}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                )
                
              })
           }
          </Grid>
          <Modal open={this.state.modalOpen}>
                <div style={{height:"100%",background: '#eee'}}>
                    <Typography align="center" variant="title">{this.state.modalTitle}</Typography>
                    <Typography align="center" variant="body2">{this.state.modalDesc}</Typography>
                    <Button variant="contained" onClick={(e)=>{axios.put('/me/add',{
                        user: this.getCookie('user'),
                        email: this.getCookie('email'),
                        title: this.state.modalTitle,
                        link: this.state.modaLink,
                        description: this.state.modalDesc
                        }).then(res=>{
                            console.log(res);
                            document.cookie=`trash=${JSON.stringify(res.data.trash)};path=/;expires=${new Date(new Date().getTime() + 3000 * 1000)}`;
                        })}}>добавить в корзину</Button>
                    <Button variant="contained" onClick={(e)=>{this.setState({modalOpen:false})}}>Закрыть</Button>
                </div>
            </Modal>
          </div>
    );
  }
}

export default Accessories;
import React, { Component } from 'react';
import axios from 'axios'

// import InputLabel from '@material-ui/core/InputLabel';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';


class Accessories extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
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
                    <Card>
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
          </div>
    );
  }
}

export default Accessories;
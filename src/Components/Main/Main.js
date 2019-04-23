import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile'
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import Button from '@material-ui/core/Button';

import axios from 'axios'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        axios.get('/getProducts')
        .then(response => {
            let data = JSON.parse(response.request.response)
            this.setState({data: data.data.products});
        }); //{data:response.request.response
      }
    render() {
        return(
            <div>
            <Grid container justify="center">
                <Typography style={{margin:"1em 0em",padding:" 2em 0em", borderBottom: "1px solid #000", borderTop:"1px solid #000"}} variant="title">
                    Мы не просто магазин, мы команда людей, которым нравится выращивать цветы а также делиться ими со всеми.
                </Typography>
            </Grid>
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
                                            <Typography component="p">{chunk.description}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                </Grid>
                            )
                        })
                    }
            </Grid>
            </div>
        )
    }
}
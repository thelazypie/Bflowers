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

export default class Header extends Component {
    render() {
        return(
            <div>
            <Grid container justify="center">
                <Typography style={{margin:"1em 0em",padding:" 2em 0em", borderBottom: "1px solid #000", borderTop:"1px solid #000"}} variant="title">
                    Мы не просто магазин, мы команда людей, которым нравится выращивать цветы а также делиться ими со всеми.
                </Typography>
            </Grid>
            <Grid container>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid style={{padding:"2em 2em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia style={{height:"200px"}} image="https://pp.userapi.com/c851220/v851220861/f7b7c/I9VHS3cKHnk.jpg" title="flower"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">Flower</Typography>
                                <Typography component="p">DESCRIPTION</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            </div>
        )
    }
}
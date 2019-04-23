import React,{Component} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'

import Typography from '@material-ui/core/Typography';


export default class Delivery extends Component {
    render() {
        return(
            <div className="delivery">
                <Typography variant="display3" align="center" color="textSecondary">
                    О доставке
                </Typography>
                <Grid container alignItems="center" alignContent="center">
                    <Grid item style={{padding:"1em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card style={{width:"500px"}} className="delivery-item">
                    <CardContent>
                        <Typography align='center' variant="h5" component="h2">
                            Доставка производится на территории Росии.
                            Если в вашем городе находится наш магазин то можно произвести самовывоз.
                        </Typography>
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item style={{padding:"1em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card style={{width:"500px"}} className="delivery-item">
                        <CardContent>
                            <Typography align='center' variant="h5" component="h2">
                                При повреждении товара ВО ВРЕМЯ ДОСТАВКИ(при в вскрытии на почте) будет возвращена полная сумма стоимости товара.
                            </Typography>
                        </CardContent> 
                    </Card>
                    </Grid>
                    <Grid item style={{padding:"1em"}} item lg={4} md={4} sm={12} xs={12}>
                    <Card style={{width:"500px"}} className="delivery-item">
                    <CardContent>
                        <Typography align='center' variant="h5" component="h2">
                            Простое и быстрое отслеживание для вашего счастья и удобства. А также для нашего спокойства за ваш товар.
                        </Typography>
                    </CardContent> 
                    </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
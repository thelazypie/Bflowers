import React,{Component} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
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
                <Grid container alignContent="center">
                <Card style={{width:"500px", margin:"1em"}} className="delivery-item">
                    <CardContent>
                        <Typography align='center' variant="h5" component="h2">
                            Доставка производится на территории Росии.
                            Если в вашем городе находится наш магазин то можно произвести самовывоз.
                        </Typography>
                    </CardContent>
                    </Card>
                <Card style={{width:"500px", margin:"1em"}} className="delivery-item">
                    <CardContent>
                        <Typography align='center' variant="h5" component="h2">
                            При повреждении товара ВО ВРЕМЯ ДОСТАВКИ(при в вскрытии на почте) будет возвращена полная сумма стоимости товара.
                        </Typography>
                    </CardContent> 
                </Card>
                <Card style={{width:"500px", margin:"1em"}} className="delivery-item">
                    <CardContent>
                        <Typography align='center' variant="h5" component="h2">
                            Простое и быстрое отслеживание
                        </Typography>
                    </CardContent> 
                </Card>
                </Grid>
            </div>
        )
    }
}
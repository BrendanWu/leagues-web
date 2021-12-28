import React from "react";
import axios from "axios";
import { API } from "../constants";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';


const Playgrounds = () => {
    const [playgroundsData, setPlaygroundsData] = React.useState([]);

    React.useEffect(() => {
        const getPlaygroundsData = async () => {
            axios.get(`${API}playgrounds`)
                .then(res => {
                    console.log(res.data);
                    setPlaygroundsData(res.data);
                });
        }

        getPlaygroundsData();
    }, []);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 16,
            marginTop: 6
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {
                playgroundsData.map((playground: any) => (
                    <Grid item lg={4} md={6} sm={12}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} component="p" gutterBottom>
                                    {Number(playground.id) + 1}- {playground.title}
                                </Typography>

                                <Typography className={classes.pos} color="textSecondary">
                                    {playground.description}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small" href={playground.website} target="_blank">
                                    Website
                                </Button>

                                <Button size="small" href={playground.imageUrl} target="_blank">
                                    ImageUrl
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Playgrounds;
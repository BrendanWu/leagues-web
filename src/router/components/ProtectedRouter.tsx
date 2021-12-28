import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
    AdminDocs,
    Home,
    LockerRoom,
    Playgrounds,
    Posts,
    Profile,
    Sites
} from "../../pages";
import {
    Footer,
    Leagues,
    ProtectedNav,
    Site,
    TeamStats,
    TorontoListings
} from "../../pages/components";
import { useProtectedNavStyles as useStyles } from "../../pages/styles";


const ProtectedRouter = () => {
    const token = useSelector((state: any) => state?.auth?.token) as string;
    const auth = { token };
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Switch>
                <div className={classes.root}>
                    <CssBaseline />

                    <ProtectedNav />

                    <main className={classes.content}>
                        <div className={classes.appBarSpacer} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/locker" component={LockerRoom} />
                        <Route exact path="/team-stats" component={TeamStats} />
                        <Route exact path="/league" component={Leagues} />
                        <Route exact path="/news" component={TorontoListings} />
                        <Route exact path="/docs">
                            <AdminDocs auth={auth} />
                        </Route>
                        <Route exact path="/posts">
                            <Posts auth={auth} />
                        </Route>
                        <Route exact path="/sites" component={Sites} />
                        <Route exact path="/playgrounds" component={Playgrounds} />
                        <Route exact path="/site/:id" component={Site} />
                        <Redirect to="/" />

                        <Footer />
                    </main>
                </div>
            </Switch >
        </BrowserRouter >
    );
};

export default ProtectedRouter;
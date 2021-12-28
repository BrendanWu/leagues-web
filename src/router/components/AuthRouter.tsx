import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import { Login, Register, Home } from "../../pages";


const AuthRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRouter;
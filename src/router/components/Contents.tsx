import { Route } from "react-router-dom";
import UrbanTorontoListings from "../../components/UrbanTorontoListings";
import {
  Home,
  BitCoinTranscations,
  Profile,
  Sites,
  Site,
  Docs,
} from "../../pages";

const Content = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route
        exact
        path="/bitcoin-transactions"
        component={BitCoinTranscations}
      />
      <Route exact path="/news" component={UrbanTorontoListings} />
      <Route exact path="/docs" component={Docs} />
      <Route exact path="/sites" component={Sites} />
      <Route exact path="/site/:id" component={Site} />
    </>
  );
};

export default Content;

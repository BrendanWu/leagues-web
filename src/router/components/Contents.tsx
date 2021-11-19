import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import UrbanTorontoListings from "../../components/UrbanTorontoListings";
import { Home, BitCoinTranscations, Sites, Site, AdminDocs } from "../../pages";
import Posts from "../../pages/Docs/Posts";

const Content = () => {
  const token = useSelector((state: any) => state?.auth?.token) as string;
  const auth = {token}
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/bitcoin-transactions"
        component={BitCoinTranscations}
      />
      <Route
        exact
        path="/news"
        component={UrbanTorontoListings}
      />
      <Route
        exact
        path="/docs"
    >
        <AdminDocs auth={auth} />
        </Route>
      <Route
        exact
        path="/posts"
    >
        <Posts auth={auth} />
        </Route>
      <Route
        exact
        path="/sites"
        component={Sites}
      />
      <Route
        exact
        path="/site/:id"
        
        component={Site}
      />
      
    </>
  );
};

export default Content;

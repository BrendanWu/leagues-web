import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import UrbanTorontoListings from "../../components/UrbanTorontoListings";
import { Home, Sites, Site, AdminDocs, Playgrounds } from "../../pages";
import Posts from "../../pages/Docs/posts/Posts";
import { Profile } from "../../pages/Profile";
import { LockerRoom } from "../../pages/LockerRoom/index";
import { TeamStat } from "../../pages/LockerRoom/TeamStat";
import { Leagues } from "../../pages/LockerRoom/Leagues";

const Content = () => {
  const token = useSelector((state: any) => state?.auth?.token) as string;
  const auth = { token };
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/locker" component={LockerRoom} />
      <Route exact path="/team-stat" component={TeamStat} />
      <Route exact path="/leg" component={Leagues} />
      <Route exact path="/news" component={UrbanTorontoListings} />
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
    </>
  );
};

export default Content;

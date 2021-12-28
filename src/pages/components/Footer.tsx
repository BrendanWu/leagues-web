import { FlexDiv } from "../../react-design-system/FlexDiv";
import { Text } from "../../react-design-system/Text";
import logo from "../../assets/leagues-logo.svg";
import twitterLogo from "../../assets/twitterLogo.svg";
import instagramLogo from "../../assets/instagramLogo.svg";
import facebookLogo from "../../assets/facebookLogo.svg";


const Footer = () => {
    const year = new Date().getFullYear();

    return (
      <div
        style={{
          background: "black",
          padding: 64,
          marginTop: 32,
          color: "white",
        }}
      >
        <div className="container-fluid">
          <FlexDiv align="center">
            <FlexDiv vert>
              {/* <Text style={{ fontWeight: "bold" }}>LiftedSolutions ®</Text> */}
              <img src={logo} style={{ width: 100, marginBottom: 16 }} />
  
              <Text>Toronto, ON</Text>
              <Text>1.855.638.7646</Text>
              <Text>join@leagues.co</Text>
            </FlexDiv>
            <FlexDiv>
              <FlexDiv>
                <Text>LOCKER ROOM</Text>
              </FlexDiv>
              <FlexDiv>
                <Text>ABOUT US</Text>
              </FlexDiv>
              <FlexDiv>
                <Text>SUPPORT</Text>
              </FlexDiv>
            </FlexDiv>
            <FlexDiv>
              <FlexDiv justify="flex-end">
                <img src={twitterLogo} style={{ width: 16, marginRight: 32 }} />
  
                <img src={facebookLogo} style={{ width: 12, marginRight: 32 }} />
  
                <img src={instagramLogo} style={{ width: 16 }} />
              </FlexDiv>
            </FlexDiv>
          </FlexDiv>
        </div>
        <FlexDiv justify="center" style={{ borderTop: "1px solid white" }}>
          <Text style={{ marginRight: 16 }}>Terms & Conditions</Text>
          <Text style={{ marginRight: 16 }}>Privacy Policy</Text>
          <Text style={{ marginRight: 16 }}>Purchase Policy</Text>
          <Text style={{ marginRight: 16 }}>
          © {year} Leagues. All Rights Reserved.
          </Text>
        </FlexDiv>
      </div>
    );
  };

  export default Footer;
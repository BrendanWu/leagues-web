import React from "react";
import { FlexDiv } from "../../react-design-system/FlexDiv";
import img from "../../../src/assets/location.png";


const Marker = (props: {
    lat: number;
    lng: number;
    text: string;
    onSubmit: () => void;
}) => {

    return (
        <FlexDiv
            style={{
                fontSize: 18,
                fontWeight: "bold",
                background: "white",
                color: "darkorange",
                zIndex: 10,
            }}
            onClick={() => props.onSubmit()}
        >
            {
                props.text === "Current Location" ?
                    props.text :
                    <img style={{ height: 50, width: 50 }} alt="Marker" src={img} />
            }
        </FlexDiv>
    );
}

export default Marker;
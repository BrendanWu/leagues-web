import { FlexDiv } from "../../../../react-design-system/FlexDiv";
import MUILink from '@material-ui/core/Link';
import Button from "../../../../react-design-system/Button";

const InfoWindow = (props: {
    lat: number;
    lng: number;
    title: string;
    description: string;
    timing: string;
    website: string;
    imageUrl: string;
    onSubmit: () => void;
}) => {

    return (
        <FlexDiv vert
            style={{
                position: 'relative',
                fontFamily: "Roboto, Arial",
                left: -87.5,
                bottom: 125,
                width: 200,
                backgroundColor: 'white',
                boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
                padding: 12,
                fontSize: 14,
                zIndex: 100,
                borderRadius: 8
            }}
        >
            <div style={{ fontWeight: 500, fontSize: 14, color: "#333" }}>
                {props.title}
            </div>
            <div style={{ fontSize: 13, color: 'gray', marginBottom: "1em" }}>
                {props.description}
            </div>
            <div style={{ fontSize: 13, color: '#333', marginBottom: "0.5em" }}>
                Today: {props.timing}
            </div>
            <div style={{ marginBottom: "1em" }}>
                <MUILink
                    style={{
                        color: "#427fed",
                        height: 5,
                        fontSize: `13px`,
                        fontWeight: 500
                    }}
                    href={props.website}
                    target="_blank"
                    rel="noreferrer"
                >
                    View on Google Maps
                </MUILink>
            </div>
            <FlexDiv vert>
                <Button alt label="Join" style={{ height: 36 }} onClick={() => props.onSubmit()} />
            </FlexDiv>
        </FlexDiv>
    )
}


export default InfoWindow;
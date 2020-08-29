import { makeStyles, Theme } from "@material-ui/core/styles";

const chatboxStyles = makeStyles((theme: Theme) => ({
    chatbox: {
        flexGrow: 99,
        overflowY: "scroll",
        overflowX: "hidden",
        backgroundColor: "#F9F9FB",
        display: "flex",
        flexDirection: "column",
    },
    messageTop: {
        marginTop: "auto",
    },
}));

export default chatboxStyles;

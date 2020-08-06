import { makeStyles, Theme } from "@material-ui/core/styles";

const chatboxStyles = makeStyles((theme: Theme) => ({
    chatbox: {
        flexGrow: 99,
        overflowY: "scroll",
        overflowX: "hidden",
    },
}));

export default chatboxStyles;

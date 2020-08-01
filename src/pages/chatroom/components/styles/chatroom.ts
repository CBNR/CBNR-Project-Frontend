import { makeStyles, Theme } from "@material-ui/core/styles";

const chatroomStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        border: "1px solid black",
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(0),
    },
    innerContainer: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "inherit",
        maxHeight: "inherit",
        height: "100%",
        padding: theme.spacing(0),
    },
    chatContainer: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "inherit",
        maxHeight: "inherit",
        overflowY: "hidden",
        padding: theme.spacing(0),
        flexGrow: 99,
    },
}));

export default chatroomStyles;

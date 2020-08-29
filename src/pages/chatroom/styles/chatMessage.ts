import { makeStyles, Theme } from "@material-ui/core/styles";

const messageStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        overflowWrap: "anywhere",
        width: "100%",
        backgroundColor: "#F9F9FB",
    },
    name: {
        fontWeight: "bold",
        paddingRight: theme.spacing(2),
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    textContainer: {
        paddingLeft: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
    },
}));

export default messageStyles;

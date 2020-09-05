import { makeStyles, Theme } from "@material-ui/core/styles";

const inputStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
        minHeight: "50px",
        backgroundColor: "#EFF0F3",
        margin: theme.spacing(1),
        borderRadius: "8px",
    },
    input: {
        flexGrow: 99,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    button: {
        margin: "auto",
        marginRight: theme.spacing(2),
        padding: theme.spacing(1),
        borderRadius: "50%",
        backgroundColor: "#97DAEA",
        color: "white",
        transition: "all 0.15s",
        transformOrigin: "50% 50%",
        '&:hover': {
            backgroundColor: "#8FD2E2",
            transform: "scale(1.05)",
         },
    },
}));

export default inputStyles;

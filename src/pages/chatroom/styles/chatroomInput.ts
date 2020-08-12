import { makeStyles, Theme } from "@material-ui/core/styles";

const inputStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        maxWidth: "100%",
    },
    input: {
        flexGrow: 99,
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1),
    },
    button: {
        padding: theme.spacing(1),
    },
}));

export default inputStyles;

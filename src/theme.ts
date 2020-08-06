import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    overrides: {
        MuiDivider: {
            root: {
                backgroundColor: "#000000",
            },
        },
    },
});

export default theme;

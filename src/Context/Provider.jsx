import { createTheme } from "@mui/material";
import { React, useState, } from "react";

import Context from "./Context";

import { amber, deepOrange, grey } from "@mui/material/colors";



function Provider(props) {
    const [Mode, setMode] = useState("light");
    console.log(`This is Provider ${Mode}`);


    const getDesignTokens = (Mode) => ({
        palette: {
            Mode,
            primary: {
                ...amber,
                ...(Mode === 'dark' && {
                    main: amber[300],
                }),
            },
            ...(Mode === 'dark' && {
                background: {
                    default: deepOrange[900],
                    paper: deepOrange[900],
                },
            }),
            text: {
                ...(Mode === 'light'
                    ? {
                        primary: grey[900],
                        secondary: grey[800],
                    }
                    : {
                        primary: '#fff',
                        secondary: grey[500],
                    }),
            },
        },
    });

    const darkModeTheme = createTheme(getDesignTokens(Mode));

    return (
        <>
            <Context.Provider value={{ Mode, setMode, darkModeTheme }}>
                {props.children}
            </Context.Provider>
        </>
    );
}

export default Provider;

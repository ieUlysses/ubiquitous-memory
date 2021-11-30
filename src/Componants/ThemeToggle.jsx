import { React, useContext } from "react";
import Context from "../Context/Context"
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";


export default function () {
    const context = useContext(Context);
    const { Mode, setMode } = context;

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };
    console.log(Mode);
    return (
        <>
            <IconButton onClick={toggleColorMode}>{Mode === "dark" ? <Brightness7 /> : <Brightness4 />}</IconButton>
        </>
    );
}

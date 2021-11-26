
import React from "react";
import { NavLink } from "react-router-dom";


//TODO: Dive deeper into nested routes and params in future v. example: nest experience + projects under about page https://reactrouter.com/docs/en/v6/getting-started/tutorial


function NavBar() {

    const navStyle = {
        display: "flex",
        justifyContent: "space-evenly"
    }

    /* Active class for navbar, emphasises current page */
    const active = {
        color: "red",
        fontFamily: "Arial"
    };

    /* Keeping routes inside array avoids clutter */
    const routes = [
        { to: "/", title: "Home" },
        { to: "/about", title: "About" },
        { to: "/contact", title: "Contact" }
    ]

    return (
        <>
            <ul style={navStyle}>

                {routes.map((route, index) =>
                    <NavLink key={index} to={route.to} style={({ isActive }) =>
                        isActive ? active : undefined
                    } ><li>{route.title}</li></NavLink>
                )}

            </ul >
        </>
    )
}


/* Link does not allow activeClass  for active class ou need NavLink*/

{/*
    Uses a function that returns an object, colour is changed based on active state... Not my prefrence, feels longwinded

    <NavLink style={({ isActive }) => {
                        return {
                            color: isActive ? "red" : ""
                        };
                    }} to="/">Home</NavLink> */}


export default NavBar
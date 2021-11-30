import React from "react";
import NavBar from "../../Componants/NavBar";
import ThemeToggle from "../../Componants/ThemeToggle";
function Home() {
    return (
        <>
            <NavBar />
            <div>
                <h1>
                    Hello world, You're on the Home page
                </h1>
                <ThemeToggle />
            </div>
        </>
    )
}

export default Home
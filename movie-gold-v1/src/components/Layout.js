import { Outlet } from "react-router-dom";
import React from "react";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";

const Layout=()=>{
    return(
        <main>
            <Outlet/>
        </main>
    )
}
export default Layout
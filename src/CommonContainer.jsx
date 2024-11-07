import React from "react";
import Sidebar from "./Components/sidebar";
import Header from "./Components/header";

const CommonContainer = ({children}) =>{
return(
    <>
    <Header/>
    <Sidebar />
    {children}
    </>
)
}

export default CommonContainer
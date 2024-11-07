import React from "react";
import Sidebar from "./Components/sidebar";
import Header from "./Components/header";

const CommonContainer = ({ children }) => {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className=" w-full">
                    <Header />
                    {children}
                </div>
            </div>
        </>
    )
}

export default CommonContainer
import React from "react"
import Dropdown from "./Dropdown"
import Sidebar from "./sidebar"

export default function Header({ children }) {
    return (
        <>
            <main className="headWrapper z-[1] relative flex w-full">
                {/* <Sidebar /> */}
                <section className="flex flex-col gap-2 p-2 px-4 w-full bg-white">
                    <div className="flex items-center justify-between">
                        <div className="left-side text-xl">
                            <p> Inventory </p>
                        </div>
                        <div className="right-side flex items-center gap-3 text-sm">
                            <Dropdown name={"Nanny's Shop"} options={["shop", "shop", "shop"]} />
                            <div className="notification-icon"> noti </div>
                            <div className="account">acc</div>
                        </div>
                    </div>
                    <div className="sitemap flex items-center text-xs">
                        <span className="home">home</span>
                        <span className="Inventory"> / Inventory</span>
                        <span className="View-Inventory">/ View Inventory</span>
                    </div>
                <section className=" bg-[#00000012]"> {children} </section>
                </section>
                    
            </main>
        </>
    )
}
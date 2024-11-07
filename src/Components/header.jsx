import React from "react"
import Dropdown3 from "./Dropdown"

export default function Header() {
    return (
        <>
        <section className="flex flex-col gap-2 p-2 px-4">
            <div className="flex items-center justify-between">
                <div className="left-side text-xl">
                    <p> Inventory </p>
                </div>
                <div className="right-side flex items-center gap-3 text-sm">
                    <Dropdown3 />
                    <div className="notification-icon"> noti </div>
                    <div className="account">acc</div>
                </div>
            </div>
            <div className="sitemap flex items-center text-xs">
                <span className="home">home</span>
                <span className="Inventory"> / Inventory</span>
                <span className="View-Inventory">/ View Inventory</span>
            </div>
        </section>
        </>
    )
}
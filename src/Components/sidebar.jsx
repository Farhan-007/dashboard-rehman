    import React from "react"
    import Header from "./header"

    export default function Sidebar({ children }) {
        return (
            <>
                <main className=" flex relative " >
                    <section className="left-0 top-0 flex flex-col justify-between p-4 min-h-screen max-w-min bg-[#00000012]">
                        <div className="icon">icon</div>
                        <div className="sidebar-items flex flex-col gap-2">
                            <div>menu</div>
                            <div>cart</div>
                            <div>invt</div>
                            <div>chat</div>
                            <div>sett</div>
                        </div>
                        <div className="sidebar-support flex flex-col gap-2">
                            <div className="care-line">call us</div>
                            <div className="rewards">rewards</div>
                            <div className="logout pt-3">logout</div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
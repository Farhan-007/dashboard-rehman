import React from "react"
import Card from "../Components/Card"
import ItemDetails from "./ItemDetails"
import OrdersDetails from "./OrdersDetails"
import Purchases from "./Purchases"

export default function InventoryDetails({ item }) {
    return (
        <>
            <section className="flex flex-col gap-5 p-5 bg-gray-300">
                <div className="itemDesc flex justify-between mb-3">
                    <div className="left-side flex gap-3">
                        <div className="item-name">item.item-name</div>
                        <div className="date-added">Date Added item.date-added</div>
                        <div className="date-added">Product URL item.url</div>
                    </div>
                    <div className="right-side flex gap-3 text-sm text-white">
                        <button className="p-2 px-2 flex items-center rounded-lg bg-black">
                            <p>Edit Product</p>
                            <span className="pl-1">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path d="M10 14.25C9.8125 14.25 9.65625 14.1875 9.5 14.0625L2.3125 7C2.03125 6.71875 2.03125 6.28125 2.3125 6C2.59375 5.71875 3.03125 5.71875 3.3125 6L10 12.5312L16.6875 5.9375C16.9688 5.65625 17.4063 5.65625 17.6875 5.9375C17.9687 6.21875 17.9687 6.65625 17.6875 6.9375L10.5 14C10.3437 14.1563 10.1875 14.25 10 14.25Z" />
                                </svg>
                            </span>
                        </button>
                        <button className="p-2 px-2 rounded-lg bg-red-400">Unpublish Product</button>
                    </div>

                </div>

                <ItemDetails />
                <OrdersDetails />
                <Purchases />

            </section>
        </>
    )
}
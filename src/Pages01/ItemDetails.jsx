import React from "react"
import Card from "../Components/Card"

export default function ItemDetails() {
    return (
        <section className="flex gap-5">
            <div className="p-3 rounded-md bg-white">
                <span className="ItemImg block h-[120px] w-[200px]">
                    {/* <img src="" alt="" /> */}
                </span>
            </div>
            <Card>
                <div className="lastOrder h-full flex flex-col justify-between gap-5 text-gray-400 text-sm">
                    <div className="flex gap-2">
                        <p className=""> Last Order</p>
                        <p className="text-black">lastOrder.date</p>
                        <span className="badge ml-5 bg-gray-300 text-xs p-[2px] rounded-md text-green-600">
                            Published
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <div className="price text-sm w-1/2 ">
                            <p>Price</p>
                            <span className="text-black">$25,000.00</span>
                        </div>
                        <div className="inStock w-1/2">
                            <p>In-Stock</p>
                            <span className="text-black">20</span>
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="TotalOrders h-full flex flex-col justify-between gap-5 text-gray-400 ">
                    <div className="flex justify-between gap-5">
                        <span className="bg-gray-300 p-1 rounded text-xs"> ic</span>
                        <span className="text-xs"> All-time</span>
                    </div>
                    <div className="">
                        <p className="text-sm">Total Orders</p>
                        <p className="text-black"> $50,000.00</p>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="views h-full flex flex-col justify-between text-gray-400">
                    <div className="flex justify-between">
                        <span className="bg-gray-300 p-1 rounded text-xs"> ic</span>
                        <span className="text-xs"> All-time</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <p className="text-sm">Views</p>
                            <p className="text-black">1,200</p>
                        </div>
                        <div className="w-1/2">
                            <p className="text-sm">Favourite</p>
                            <p className="text-black">23</p>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )
}
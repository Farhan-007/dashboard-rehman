import React from "react"
import Card from "../Components/Card"

export default function OrdersDetails() {
    return (
        <section className="flex gap-5">
            <Card>
                <div className="goodOrders h-full flex flex-col justify-between text-gray-400">
                    <div className="flex justify-between">
                        <span className="bg-gray-300 p-1 rounded text-xs"> ic</span>
                        <span className="text-xs"> All-time</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-full">
                            <p className="text-sm">All Orders</p>
                            <p className="text-black">1</p>
                        </div>
                        <div className="w-full">
                            <p className="text-sm">Pending</p>
                            <p className="text-black">0</p>
                        </div>
                        <div className="w-full">
                            <p className="text-sm">Completed</p>
                            <p className="text-black">1</p>
                        </div>
                    </div>
                </div>
            </Card>
            <Card>
                <div className="returnOrders h-full flex flex-col justify-between text-gray-400">
                    <div className="flex justify-between">
                        <span className="bg-gray-300 p-1 rounded text-xs"> ic</span>
                        <span className="text-xs"> All-time</span>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-full">
                            <p className="text-sm">Canceled</p>
                            <p className="text-black">0</p>
                        </div>
                        <div className="w-full">
                            <p className="text-sm">Returned</p>
                            <p className="text-black">0</p>
                        </div>
                        <div className="w-full">
                            <p className="text-sm">Damaged</p>
                            <p className="text-black">0</p>
                        </div>
                    </div>
                </div>
            </Card>
        </section>
    )
}
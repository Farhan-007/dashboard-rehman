import React from "react"
import Card from "../Components/Card"
import Dropdown from "../Components/Dropdown"
import Select from "../Components/Select"

export default function Purchases() {
    return (
        <section className="flex min-h-[50vh] w-full gap-5">
            <Card>
                <div className="Purchases-input w-full flex justify-between">
                    <p className="">Purchases</p>
                    <div className="flex gap-2 text-sm">
                        <input type="search" name="search" id="" placeholder="search" className="rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary" />
                        <Select options={["filter"]} />
                        <Select options={["filter"]} />
                        <button className="rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary">
                            Share
                        </button>
                        <Select options={["Bulk Action"]}/>
                    </div>
                </div>
            </Card>

        </section>
    )
}
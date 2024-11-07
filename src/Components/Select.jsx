import React from "react"

export default function Select({ options }) {
    return (
        <>
            <div className='relative z-20'>
                <select className='relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-4 text-dark-6 outline-none transition focus:border-primary active:border-primary '>
                    {options.map((item, idx) => (
                        <option value='' key={idx} className='dark:bg-dark-2'>{item}</option>
                    ))}
                    <option value='' className='dark:bg-dark-2'>Option</option>
                    <option value='' className='dark:bg-dark-2'>Option</option>
                </select>
                <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
            </div>
        </>
    )
}
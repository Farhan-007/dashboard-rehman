import React, { useEffect, useRef, useState } from "react";

// Hook for detecting outside click
let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (domNode.current && !domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    }, [handler]); // Add dependency array with handler

    return domNode;
};

const Dropdown = ({ name, options }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    let domNode = useClickOutside(() => {
        setDropdownOpen(false);
    });

    return (
        <>
            <section className="dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div ref={domNode} className="w-full">
                            <div className="relative">
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="bg-primary flex items-center rounded-[5px]"
                                >
                                    {name}
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
                                <div
                                    className={`shadow-1 dark:shadow-box-dark absolute left-0 z-40 mt-2 w-full rounded-md bg-white dark:bg-dark-2 py-[10px] transition-all ${dropdownOpen
                                            ? "top-full opacity-100 visible"
                                            : "top-[110%] invisible opacity-0"
                                        }`}
                                >
                                    {options.map((item, idx) => (
                                        <DropdownItem label={item} key={idx} href="/#" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const DropdownItem = ({ label, href }) => {
    return (
        <a
            href={href}
            className="text-body-color dark:text-dark-6 hover:bg-[#F5F7FD] dark:hover:bg-primary/5 hover:text-primary block px-5 py-2 text-base"
        >
            {label}
        </a>
    );
};

export default Dropdown;
    
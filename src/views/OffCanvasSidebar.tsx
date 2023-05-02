"use client"
import { ReactNode, useState, useEffect } from "react"
import { Dashboard, ECommerce, Inbox, Kanban, Products, SignIn, SignUp, User } from "@/assets/images"



export default function OffCanvasSidebarView() {
    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <div className="text-center">
                <div onClick={() => { setSidebar(!sidebar) }} className="cursor-pointer text-white w-52 mx-auto mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Show navigation
                </div>
            </div>

            <div onMouseLeave={() => { setSidebar(false) }} className={`${sidebar ? "flex" : "hidden"} flex-col fixed top-0 left-0 p-4 w-64 h-screen overflow-y-auto bg-gray-100 dark:bg-black`}>
                <div className="flex justify-between items-center">
                    <h5 className="font-semibold text-gray-500 dark:text-gray-400">Menu</h5>
                    <div onClick={() => { setSidebar(!sidebar) }} className="px-3 py-1 bg-transparent hover:bg-purple-100 active:bg-purple-200 rounded-md cursor-pointer" >
                        <svg className="w-5 h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="py-4 overflow-y-auto ">
                    <ul className="space-y-2">
                        {navBarItems.map((item: NavbarType) =>
                            <li key={item.label}>
                                <div className="cursor-pointer flex py-3 w-full text-basefont-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" >
                                    <item.icons />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap ">{item.label}</span>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

interface NavbarType {
    label: string,
    icons: () => any,
}

const navBarItems: Array<NavbarType> = [
    {
        label: "Dashboard",
        icons: Dashboard,

    },
    {
        label: "E-commerce",
        icons: ECommerce,
    },
    {
        label: "Kanban",
        icons: Kanban,
    },
    {
        label: "Inbox",
        icons: Inbox,
    },
    {
        label: "Users",
        icons: User,
    },
    {
        label: "Products",
        icons: Products,
    },
    {
        label: "Sign In",
        icons: SignIn,
    },
    {
        label: "Sign Up",
        icons: SignUp,
    },
]

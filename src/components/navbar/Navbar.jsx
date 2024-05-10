import React, { useState } from "react";

const Navbar = () => {

    return (
        <div className="fixed h-16 w-full  shadow-lg">
            <nav className="absolute inset-x-0 top-0 h-16 flex items-center justify-between mx-8 font-medium">
                <span className="text-blue-600 text-3xl" >Logo</span>
                <ul className="flex justify-between gap-6 text-2xl font-normal">
                    <li >
                    <a href="/instructor/signup" >Instructor</a> 
                    </li>
                    <li>
                    <a href="/user/signup" >User</a> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;
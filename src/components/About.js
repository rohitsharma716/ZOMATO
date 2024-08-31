import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
    return(
        <div>
    <h1>About us</h1>
    <p>Zomato is an Indian multinational restaurant aggregator and food delivery company. It was founded by Deepinder Goyal and Pankaj Chaddah in 2008.[4] Zomato provides information, menus and user-reviews of restaurants as well as food delivery options from partner restaurants in more than 1,000 Indian cities and towns, as of 2022–23. Zomato rivals Swiggy in food delivery and hyperlocal space.</p>
    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
    <Outlet/>
    </div>
    )
}
export default About;
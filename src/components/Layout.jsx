import { Link, Outlet } from "react-router-dom";
import React from 'react';

const Layout = () => {
    const items = [
        {name : "HOME", link : "/"},
        {name : 'KHANS', link : "/Khans"},
        {name : 'WARS', link : "/Wars"},
        {name : 'CENTERS', link : "/Centers"},
        {name : 'INFO', link : "/Info"},
      ]
    return(
        <>
            <div className="Navbar">
                <img className="logo" src="https://cdn-icons-png.flaticon.com/512/630/630685.png"></img>

                <ul className="points">{items.map(({name, link}) => <li key={name} className="array" href="link"><Link to={link}>{name}</Link></li>)}</ul>

                <img className="burger" src="https://cdn-icons-png.flaticon.com/512/4254/4254068.png"></img>
            </div>

            <Outlet />
        </>
    )
}

export default Layout
import { NavLink } from 'react-router-dom'
import object from './Nav.module.css'
import React from "react"

const Nav = () => {
    return (
        <nav className={object.nav}>
            <div className={`${object.item} ${object.active}`}>
                <NavLink to="/profile" className= { navData => navData.isActive ? object.active : object.item }>Profile</NavLink>
            </div>
            <div className={object.item}>
                <NavLink to="/dialogs" className= { navData => navData.isActive ? object.active : object.item }>Messages</NavLink>
            </div>
            <div className={object.item}>
                <NavLink to="/news" className={navData => navData.isActive ? object.active : object.item}>News</NavLink>
            </div>
            <div className={object.item}>
                <NavLink to="/music" className={navData => navData.isActive ? object.active : object.item}>Music</NavLink>
            </div>
            <div className={object.item} >
                <NavLink>Settings</NavLink>
            </div>
            <div className={object.item} >
                <NavLink to="/friends" className={navData => navData.isActive ? object.active : object.item}>Friends</NavLink>
            </div>
        </nav>
    )
}

export default Nav
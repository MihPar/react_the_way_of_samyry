import object from './Nav.module.css'
// import React from "react"
console.log(object )

const Nav = () => {
    return (
        <nav className={object.nav}>
            <div className={`${object.item} ${object.active}`}>
                <a href="/Profile">Profile</a>
            </div>
            <div className={object.item}>
                <a href="/Dialogs">Messages</a>
            </div>
            <div className={object.item}>
                <a>News</a>
            </div>
            <div className={object.item}>
                <a>Music</a>
            </div>
            <div className={object.item} >
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav
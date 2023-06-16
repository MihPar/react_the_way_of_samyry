import MyPosts from "./MyPosts/MyPosts"
import object from "./Profile.module.css"
import React from 'react'
// import React from "react"

const Profile = () => {
    return (
        <div>
            <div>
             <img src="https://media.istockphoto.com/id/1356364287/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D1%81%D0%BE%D1%81%D1%80%D0%B5%D0%B4%D0%BE%D1%82%D0%BE%D1%87%D1%8C%D1%82%D0%B5%D1%81%D1%8C-%D0%BD%D0%B0-%D1%80%D1%83%D0%BA%D0%B0%D1%85-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%BF%D0%B5%D1%87%D0%B0%D1%82%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%BD%D0%B0-%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D0%B5-%D0%BD%D0%B0%D1%81%D1%82%D0%BE%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=-CuW1bawRb2sSp5REOdUM5xjP6R3_OBZOlWQf8uk0eQ=" />
            </div>
            <div>
                 ava + discription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile
import React from "react"
import { Navigate } from "react-router-dom"
import { connect } from "react-redux";


export const withSuspenses = (Component) => {
    return (props) => {
        retrun (
            <React.Suspense fallback={<Preloader />}><Component {...props} /></React.Suspense> 
        )
    }    
}

export default withSuspenses
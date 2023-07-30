import React from "react"

let withSuspense = (Component) => {
    
    return (props) => {
        return <React.Suspense fallback={<Preloader />}><Component {...props} /></React.Suspense> 
    }
}

export default withSuspense
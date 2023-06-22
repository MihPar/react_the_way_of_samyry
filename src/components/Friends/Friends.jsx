import object from "./Friends.module.css"

const Friends = function(props)  {
    return (
        <div>
        <div className={object.item}>Andry</div>
        <div className={object.item}>Dimich</div>
        <div className={object.item}>Pete</div>
        </div>
    )
}

export default Friends
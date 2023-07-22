import object from "./FormControl.module.css"
import { FormContext } from "redux-form"

export const FormControl = ({input, meta, child, element, ...props}) => {
    const hasError = meta.touched &&  meta.error
    return (
        <div className={object.formComtrol + " " + (hasError ? object.error : "")}>
            <div>
                {props.childen}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...restProps} /></FormControl>)
}

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...restProps} /></FormControl>)
} 
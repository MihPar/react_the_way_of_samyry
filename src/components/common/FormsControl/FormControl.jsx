import object from "./FormControl.module.css"
import { FormContext } from "redux-form"

export const FormControl = ({input, meta: {touched, error}, childen}) => {
    const hasError = touched && error
    return (
        <div className={object.formComtrol + " " + (hasError ? object.error : "")}>
            <div>
                {childen}
            </div>
            {hasError && <span>{error}</span>}
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

export const createField = (placeholder, name, validaters, component, props = {}, text = "") => {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validaters}
        component={component}
        {...props}
      />{text}
    </div>
  );
};
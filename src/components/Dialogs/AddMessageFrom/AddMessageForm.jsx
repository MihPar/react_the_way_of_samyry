import { Textarea } from "../../common/FormsControl/FormControl";
import { Field } from "formik";
import { maxLenghtCreater, required } from "../../../utils/validators/validators";

const maxLength50 = maxLenghtCreater(50)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSumbit}>
      <div>
        <Field
          component={Textarea}
          validator={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message "
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialog-add-message-form" })(AddMessageForm);

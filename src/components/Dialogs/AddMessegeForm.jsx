import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControl/FormsControl';
import { maxLenghtC, required } from '../../utils/validators/validatore';

const Maxlenght = maxLenghtC(50);

const AddMessageForm = (props) => {
    return(
    <form className="newMessTextarea" onSubmit={props.handleSubmit}>
    <div>
        <Field component={Textarea} validate={[required,Maxlenght]}  name='newMessageBody'/>   
     </div>

    <div>
        <button >Send</button>
    </div>
    
</form>
)
}

const AddMessageFormRedux = reduxForm({
    form:'dialogAddMessageForm'
})(AddMessageForm)
 export default AddMessageFormRedux
import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import ShowFormValues from './showFormValues';

const renderField = ({ label , input: { onChange, ...restInput }}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput 
        style={{ borderWidth:1, width:200, marginBottom: 10 }} 
        onChangeText={onChange} {...restInput}
        />
    </View>
  );
}

const WizardFormSecondPage   = (props) => {
  const { handleSubmit } = props;
  return (
    <View>
      <Text>Form 2</Text>
      <Field 
        name="email"
        component={renderField}
        label="Email"
      />
      <Field 
        name="age"
        component={renderField}
        label="Age"
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{ 
          borderWidth: 1, 
          height: 50, 
          width: 100, 
          textAlign: 'center'
        }}>Submit</Text>
      </TouchableOpacity>
      <ShowFormValues />
    </View>
  )
}

export default reduxForm({
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false
})(WizardFormSecondPage)

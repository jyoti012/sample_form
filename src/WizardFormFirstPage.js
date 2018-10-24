import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ label , input: { onChange }}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput 
        style={{ borderWidth:1, width:200, marginBottom: 10 }} 
        onChangeText={onChange} 
        />
    </View>
  );
}

function WizardFormFirstPage(props) {
  return (
    <View>
      <Text>Form 1</Text>
      <Field 
        name="firstName"
        component={renderField}
        label="Firstname"  />
      <Field 
        name="lastName"
        component={renderField}
        label="Lastname"  />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={{ 
          borderWidth: 1, 
          height: 50, 
          width: 100,
          paddingTop: 18, 
          textAlign: 'center' }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default reduxForm({
  form: 'wizard',                      // <------ same form name
})(WizardFormFirstPage)


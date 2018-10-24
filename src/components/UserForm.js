import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { load as loadAccount } from '../reducers';

const renderField = ({ label }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={{ borderWidth:1, width:200, marginBottom: 10 }} />
    </View>
  );
}

const submit = (values) => {
  console.log(values)
}

const UserForm = (props) => {
  const { handleSubmit } = props;
  return (
    <View>
      <Field 
        name="firstName"
        component={renderField}
        label="Firstname"
      />
      <Field 
        name="lastName"
        component={renderField}
        label="Lastname"
      />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={{ 
          borderWidth: 1, 
          height: 50, 
          width: 100, 
          textAlign: 'center'
        }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

// decorate and pass form configuration information
const UserForm = reduxForm({
  form: 'demo'
})(UserForm)

const selector = formValueSelector('demo') // <-- same as form name
UserForm = connect(state => {
  const { firstName, lastName } = selector(state, 'firstName', 'lastName')
  return {
    firstName, 
    lastName
  }
})(UserForm)


// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
UserForm = reduxForm({
  form: 'formDemo' // a unique identifier for this form
})(UserForm)

// You have to connect() to any reducers that you wish to connect to yourself
UserForm = connect(
  state => ({
    initialValues: state.account.data // pull initial values from reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(UserForm)

export default UserForm

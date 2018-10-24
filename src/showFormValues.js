import React from 'react';
import { Text, View } from 'react-native';
import { formValueSelector  } from 'redux-form';

import { connect } from 'react-redux'

let ShowFormValues = (props) => {
  console.log("Show values")
  console.log(props)
  return (
    <View>
      <Text>
      {JSON.stringify(props, null, 2)}
      </Text>
    </View>
  );
}
  
const selector = formValueSelector('wizard') // <== Redux Form Name

const mapStateToProps = state => {
  const values = selector(state, 'firstName', 'lastName');
  console.log(values)
  return {
    firstName: selector(state, 'firstName'),
    lastName: selector(state, 'lastName'),
  }
}

ShowFormValues = connect(
  mapStateToProps
)(ShowFormValues);

export default ShowFormValues;
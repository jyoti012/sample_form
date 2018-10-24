import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';



class App extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.state = {
      page: 1,
    }
  }
  
  finalSubmit (values) {
    console.log(values);
  }

  nextPage(props) {
    console.log('go to 2nd form');
    console.log(props);
    this.setState({ page: this.state.page + 1 })
  }

  render() {
    const { page } = this.state;
    return (
      <Provider store={store}>
        <View>
           {page === 1 && <WizardFormFirstPage onSubmit={(values) => this.nextPage(values)}/>}
          {page === 2 && <WizardFormSecondPage onSubmit={(values) => this.finalSubmit(values)}/>}
        </View>
      </Provider>
    )
  }
}

export default App;

import React from 'react';
import { Text, View, NativeEventEmitter, NativeModules, Button } from 'react-native';
import Styles from './styles';
// import ToastExample from './ToastExample'
const {ToastModule} = NativeModules
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    };
  };


  handle = () => {
    NativeModules.Counter.increment()
    NativeModules.Counter.getCount((first, ...others) => {
      this.setState({ counter: first })
      console.warn("count is " + others)
    })
  }

  //decrementing with the promise resolve and Reject 
  handleDec = () => {
    NativeModules.Counter.decrement()
      .then(res => console.warn(res))
      .catch(e => console.warn(e.message, e.code))
    NativeModules.Counter.getCount((first, ...others) => {
      this.setState({ counter: first })
      console.warn("count is " + others)
    })
  }

  setValue = () => {
    NativeModules.Counter.setCounterValue("Hello",(response)=>{
      console.warn('response =>', response)
    })
  }
  toast=()=>{
    // console.log(ToastModule);
    
    ToastModule.show('Awesome');
  }
  //decrementing the counter with the async await and promise resolve and reject

  // handleDec = async () => {
  //   try {
  //     const res = await Counter.decrement()
  //     console.warn(res);
  //   }
  //   catch (e) {
  //     console.warn(e.message, e.code);
  //   }
  // }

  render() {
    return (
      <View style={Styles.main}>
        {/* <Text style={Styles.textButton} >Counter:  {this.state.counter} </Text>
        <Button
          title="Increment Counter"
          onPress={() => this.handle()}
        />
        <Button
          title="Decrement Counter"
          onPress={() => this.handleDec()}
        /> */}
        <Button
          title="Document Scanner"
          onPress={() => this.setValue()}
        />
        <Button
        title="toast"
        onPress={this.toast}/>

      </View>
    );
  }
}
export default App;
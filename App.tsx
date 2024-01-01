import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import CustomLabel from './src/component/CustomLabel';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);
  function ChnageCount() {
    setCount(count + 1);
  }

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Count is : {count}</Text>
      <Button title="Chnagse" onPress={ChnageCount} />
    </View>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class IU extends Component {
  render() {
    let backImg = '';
    if (this.props.type === 'one') {
      backImg = require('./assets/back01.jpg');
    } else if (this.props.type === 'two') {
      backImg = require('./assets/wallpaperbetter.jpg');
    }
    return (
      <View>
        <Image source={backImg} style={{width: 100, height: 100}} />
      </View>
    );
  }
}
class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <IU type="two"></IU>

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>활동연대</Text>
              <Text style={styles.detail}> 2000, 2010</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.title, styles.point]}>출생</Text>
              <Text style={styles.detail}>1993</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>활동유형</Text>
              <Text style={styles.detail}>여성 | 솔로</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>활동장르</Text>
              <Text style={styles.detail}>가요 > 발라드, 댄스</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.title}>데뷔</Text>
              <Text style={styles.detail}>2008</Text>
            </View>
          </View>
        </View>

        <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
        <View
          style={{width: 100, height: 100, backgroundColor: 'skyblue'}}></View>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: 'steelblue',
          }}></View>
      </View>
    );
  }
}
// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.hello}>Hello Worlddd I'm Lucy.</Text>
//       <IU type="one"></IU>
//       <IU type="two"></IU>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'grey',
    fontSize: 15,
  },
  point: {
    color: 'red',
  },
  detail: {
    marginLeft: 10,
  },
});

export default App;

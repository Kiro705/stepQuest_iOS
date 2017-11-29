import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  Image: {
		flex: 1,
		margin: 20
	},
	Textfield: {
		flex: 13,
			justifyContent: 'center',
	}
});

export default class SettingsComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Image style={styles.Image} source={require('./../assets/stepquestTitle.png')} />
				<View style={styles.Textfield}>
        	<Text>Settings should go here???</Text>
        </View>
      </View>
    );
  }
}

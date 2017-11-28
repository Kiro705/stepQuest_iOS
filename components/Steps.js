import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AppleHealthKit from 'rn-apple-healthkit'

let stepCountToday = 'boo'


let options = {
    permissions: {
        read: ["StepCount"],
    }
}

// AppleHealthKit.isAvailable((err, available) => { 
// 	if (err) { 
// 		console.log('error initializing Healthkit: ', err)
// 	} else {
// 		stepCountToday = 11111
// 	} // Healthkit is available })
// })
AppleHealthKit.initHealthKit(options, (err, results) => {
    if (err) {
   		stepCountToday = err.message
        console.log("error initializing Healthkit: ", err);
        return;
    }

    stepCountToday = 'I got here.'
})

let d = new Date(2017,10,1);
let optionsSteps = {
    date: d.toISOString()
};
AppleHealthKit.getStepCount(optionsSteps, (err, results) => {
    if (err) {
        return;
    }
    console.error(results)
});
// {
//     value: '1986-09-01T00:00:00.000-0400',
//     age: 29
// }

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    //backgroundColor: 'blue',
	},
})

export default class Stats extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>MY STEPS</Text>
				<Text>{stepCountToday}</Text>
				<Text>PICK YOUR ADVENTURE</Text>
        <Text>*button to pick adventure*</Text>
			</View>
		);
	}
}

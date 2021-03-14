import React,{Component} from 'react';
import {Text,StyleSheet,View,Dimensions} from 'react-native'
export default class ShowNote extends Component{

    constructor(props){
        super(props);

    }

    render(){

     return (
            <View>
                <Text style={styles.heading}>some heading here!!!</Text>
                <Text style={styles.content}>some content here.....</Text>
            </View>
     );
    }
}

const styles = StyleSheet.create({
    heading:{
        width: Dimensions.get('screen').width,
        borderWidth:2,
        borderColor:'white',
        borderBottomColor:'black',
       padding: 10,
       fontSize:40,
       fontWeight:'bold'
    },
    content:{
        fontSize:20,
        paddingLeft:20,
        height:150
    }
});
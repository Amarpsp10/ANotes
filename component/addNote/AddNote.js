import React,{Component} from 'react';
import { Text,View,StyleSheet,TextInput,Dimensions} from "react-native";

export default class AddNote extends Component{

 render(){
    return (
        <View>
           <TextInput style={styles.heading}  placeholder='Heading' />
           <TextInput style={styles.content}  numberOfLines={3} placeholder='content....'/>
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
          paddingLeft:20
      }
});

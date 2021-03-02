import React,{Component} from 'react';
import { Text,View,StyleSheet,TextInput,Dimensions, Alert,TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from 'react-native-vector-icons'

export default class AddNote extends Component{
        constructor(props){
            super(props);

            this.state={
                note:{
                    header:'',
                    content:''
                }
            }
        }
 render(){
    return (
        <View>
            <TouchableOpacity 
               onPress={()=>{storeData({note:{header:this.state.note.header,content:this.state.note.content}});
                              this.props.navigation.navigate('home'); }}
            >
            <MaterialIcons name='done-outline' size={45}/>
            </TouchableOpacity>
           <TextInput style={styles.heading}  placeholder='Heading' onChangeText={text=>this.setState({note:{header:text,content:this.state.note.content}})}/>
           <TextInput style={styles.content}  numberOfLines={3} placeholder='content....' onChangeText={text=>this.setState({note:{content:text,header:this.state.note.header}})}/>
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



const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(Date(), jsonValue)
    // await AsyncStorage.mergeItem('myNote123', jsonValue)
     } catch (e) {
      // saving error
    }
    
  }
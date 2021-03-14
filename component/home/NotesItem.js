import React, { Component} from 'react';
import {Text,View,StyleSheet, Dimensions,TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from 'react-native-vector-icons';

export default class NotesItem extends Component{
      
    constructor(props){
        super(props);
    }

   render(){
    return (
             <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('showNote',{contenting:this.props.data.content,hadering:this.props.data.hader})}>
        <View style={styles.container}>
            <Text style={styles.header} >{this.props.data.hader}</Text>
            <View style={styles.description}>

              <Text numberOfLines={2} style={styles.content}>{this.props.data.content}</Text>
              <TouchableOpacity onPress={()=>{
                  removeValue(this.props.id);
                  Alert.alert('item remover');
                  this.props.navigation.reset({
                    index: 0,
                    routes: [{ name: 'home' }],
                  });
              }}>
              <MaterialIcons style={styles.del} name="delete" color={'black'} size={25}/>
              </TouchableOpacity>
            
            </View>
        </View>     
             </TouchableWithoutFeedback>
    );}
}

const styles = StyleSheet.create({
    container:{
      width:Dimensions.get('window').width-12,
      margin:5,
      padding:10,
      backgroundColor:'white',
      borderRadius:30,
      borderColor:'black',
      borderWidth:2,
      height:110,
    },
    header:{
       marginLeft:3,
       fontWeight:'bold',
       fontSize:32,
       borderWidth:1,
       borderColor:'white',
       borderBottomColor:'black'
    },
    description:{
         flexDirection:'row',
         justifyContent:'space-between'
    },
    content:{
        margin:5,
         width:250
    },
    del:{
        
        margin:10
    }
});



const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }
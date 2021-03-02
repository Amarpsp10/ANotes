import React, { Component} from 'react';
import {Text,View,StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
import {MaterialIcons} from 'react-native-vector-icons';
export default class NotesItem extends Component{
      
    constructor(props){
        super(props);
    }

   render(){
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{this.props.data.hader}</Text>
            <View style={styles.description}>

              <Text numberOfLines={2} style={styles.content}>{this.props.data.content}</Text>
              <TouchableOpacity>

              <MaterialIcons style={styles.del} name="delete" color={'black'} size={34}/>
              </TouchableOpacity>
            
            </View>
        </View>     
    );}
}

const styles = StyleSheet.create({
    container:{
      width:Dimensions.get('window').width,
      margin:10,
      padding:10,
      backgroundColor:'white',
      borderRadius:30,
      borderColor:'black',
      borderWidth:1,
      height:135,
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
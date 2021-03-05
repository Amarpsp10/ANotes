import React,{Component} from 'react';
import { Text,View,StyleSheet,TextInput,Dimensions, Alert,TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MaterialIcons} from 'react-native-vector-icons'

export default class AddNote extends Component{
        constructor(props){
            super(props);

            this.state={
                
                    hader:'',
                    content:''
                
            }
        }
 render(){
    return (
        <View style={{height:Dimensions.get('window').height}}>
            <TouchableOpacity  style={{position:'absolute',right:25,bottom:150}}
               onPress={()=>{storeData({hader:this.state.hader,content:this.state.content});
                              this.props.navigation.navigate('home'); }}
            >
            <MaterialIcons name='done' size={60}/>
            </TouchableOpacity>
           <TextInput style={styles.heading}  placeholder='Heading' onChangeText={text=>this.setState({hader:text,content:this.state.content})}/>
           <TextInput style={styles.content}  numberOfLines={3} placeholder='content....' onChangeText={text=>this.setState({content:text,hader:this.state.hader})}/>
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



const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(Date(), jsonValue)
    // await AsyncStorage.mergeItem('myNote123', jsonValue)
     } catch (e) {
      // saving error
    }
    
  }
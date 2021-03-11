import React,{Component,useState} from 'react';
import {ActivityIndicator,Text,View,FlatList,StyleSheet,Alert, Dimensions} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect,navigation } from '@react-navigation/native';

import NotesItem from './NotesItem';


export default class NotesList extends Component{

    constructor(props){
        super(props);
        this.state={
            
            data: null
        }
    }
     

    componentDidMount(){
        //  clearAll();
        // storeData({hader:'third title',content:'here is third content'});
        
        // storeData({header:'my header2',content:'here is my content2'});
        // removeValue('Mon Mar 01 2021 06:03:52 GMT-0800 (Pacific Standard Time)');


         getAllKeys().then(allKeys=>{
        //    this.setState({
        //      allKeys:allKeys,
        //    });
        
         getMultiple(allKeys).then(val=>{
           this.setState({data:val})
         })
           

           
          //  console.log(this.state.data);
            // this.setState({data:values});
            // console.log(values)          
         },
         error=>{
           Alert.alert('Error','please add notes');
         })
        
        //  getData('Sun Feb 28 2021 18:36:00 GMT-0800 (Pacific Standard Time)').then(data=>{
        //    console.log(data);
        //  })

        this._getData= this.props.navigation.addListener('focus',()=>{
          
          getAllKeys().then(allKeys=>{
            //    this.setState({
            //      allKeys:allKeys,
            //    });
            
             getMultiple(allKeys).then(val=>{
               this.setState({data:val})
             })
         
          },
          error=>{
            console.log(error);
          })
          
        });  
    }
    
    
    
     render(){
        return (
            <View style={{height:Dimensions.get('screen').height-90}}>
            <FlatList   
                 data={this.state.data}
                 keyExtractor={(item)=> item[0]}
                 renderItem={({item})=>(

                      <NotesItem id = {item[0]} data={JSON.parse(item[1])} navigation={this.props.navigation}/>
                      //  <Text>{item[1]}</Text>
                )}
            />        
            </View>
         );
    }           
}





const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`${Date()}`, jsonValue)
    } catch (e) {
      // saving error
    }
  }


  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys();
      // return jsonValue != null ? JSON.parse(keys) : null;
      return keys;
    } catch(e) {
      // read key error
    }
    
    console.log(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  }


  const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

 const removeValue = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }



  

  const getMultiple = async (keys) => {

    let values
    try {
      values = await AsyncStorage.multiGet(keys);
      return values;
    } catch(e) {
      // read error
    }
    console.log(values)
  
    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  }
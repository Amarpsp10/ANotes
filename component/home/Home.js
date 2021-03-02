import React, { Component,useEffect,useState } from 'react';
import {View,Text,StyleSheet,Dimensions,TouchableOpacity, Alert} from 'react-native'
import { MaterialCommunityIcons,MaterialIcons} from 'react-native-vector-icons';
import NotesList from './NotesList';


export default function Home({navigation}) {
    
    // useEffect(()=>{
    //     navigation.addListener('focus',()=>{
    //     })
    // });
     


    return (
        <View style={styles.container}>
            
             <View style={styles.header}>
                   <Text style={styles.title}>Notes</Text>
                   <TouchableOpacity style={styles.title}
                      onPress={()=>navigation.navigate('search')}
                   >
                       <MaterialCommunityIcons name='magnify'color={'black'} size={46}/>
                   </TouchableOpacity>
             </View>
        
            <TouchableOpacity style={styles.add}
                onPress={()=>{ navigation.navigate('addNote')}}
            >
                  <MaterialIcons name="add-circle" color={'black'} size={75}/>
             </TouchableOpacity> 

             <NotesList navigation={navigation}/>
             
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
       height:Dimensions.get('screen').height,      
    },
    header:{
        backgroundColor:'white',
       height:90,
       borderWidth:1,
       borderColor:'white',
       borderBottomColor:'black',
       flexDirection:'row',
       justifyContent:'space-between',
      
    },
    title:{
        marginTop:40,
        marginRight:30,
       fontSize:32,
       fontWeight:'bold',
       paddingLeft:20
    },
    add:{
        position:'absolute',
        zIndex:1,
        bottom:25,
        right:25
    }
});
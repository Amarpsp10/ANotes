import React,{Component} from 'react';
import {Text,View,FlatList,StyleSheet} from 'react-native'

import NotesItem from './NotesItem';

export default class NotesList extends Component{
    
    
     render(){
        return (
            <View>
            <FlatList
               data={[{key:{header:"my notes",contenet:"jdfjlds dskfjkdsj sdjjdjd djddj jdlfjiejkgn  foijmsdfsdfod sdfjsdifdsjkfidsjfsdodsjfdsnfdsiofjd"}},
                      {key:{header:"my notes",contenet:"jdfjlds dskfjkdsj sdjjdjd djddj jdlfjiejkgn  foijmsdfsdfod sdfjsdifdsjkfidsjfsdodsjfdsnfdsiofjd"}},
                      {key:{header:"my notes",contenet:"jdfjlds dskfjkdsj sdjjdjd djddj jdlfjiejkgn  foijmsdfsdfod sdfjsdifdsjkfidsjfsdodsjfdsnfdsiofjd"}},
                      {key:{header:"my notes",contenet:"jdfjlds dskfjkdsj sdjjdjd djddj jdlfjiejkgn  foijmsdfsdfod sdfjsdifdsjkfidsjfsdodsjfdsnfdsiofjd"}},
                      {key:{header:"my notes",contenet:"jdfjlds dskfjkdsj sdjjdjd djddj jdlfjiejkgn  foijmsdfsdfod sdfjsdifdsjkfidsjfsdodsjfdsnfdsiofjd"}}]}
                
                renderItem={({item})=>(<NotesItem data={item.key}/>)}
            />        
            </View>
         );
    }           
}


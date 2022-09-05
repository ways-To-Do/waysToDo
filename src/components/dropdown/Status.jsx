import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';

const status= [
    {label:'active' ,value :'1'},
    {label:'unactived',value :'2'}
]

export default function Status() {

const [value,setValue] = useState(null);
const [isFocus,setIsFocus] =useState(false) ;

const renderLabel =() =>{
    if (value || isFocus){
        return(
            <Text style={[styles.label,isFocus && {color:'rgba(153, 153, 153, 1)'}]}>
            </Text>
        )
    }
    return null;
};

  return (
    <View style={{flexDirection:'row'}}>
        {renderLabel()}
      <Dropdown
       style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
       placeholderStyle={styles.landing}
       selectedTextStyle={styles.text1}
       iconStyle={styles.icon}
       data={status}
       search
       maxHeight={300}
       labelField="label"
       valueField="value"
       placeholder={!isFocus ? 'Status' : '...'}
       searchPlaceholder="Search..."
       value={value}
       onFocus={() => setIsFocus(true)}
       onBlur={() => setIsFocus(false)}
       onChange={item => {
         setValue(item.value);
         setIsFocus(false);
       }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    dropdown:{
        display:'flex',
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        border:'1px solid  rgba(0, 0, 0, 0.3) ',
        height: 40,
        borderColor:'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        width: 92,
    },
    landing: {
        fontSize: 16,
        color: 'grey',
      },
      text1: {
        fontSize: 16,
      },
      icon: {
        width: 10,
        height: 20,
      },
})
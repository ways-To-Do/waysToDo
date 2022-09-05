import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
// import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Category() {

    const [data ,setData]= useState(false);
    const [form,setForm]= useState([]);

    const getCategory = async ()=>{
        try {
            const token = await AsyncStorage.getItem('token')
            if (token === null){
                navigation.navigate("Login")
            }
            const config={
                Headers:{
                    'content-type':'application/json',
                    Authorization:'Bearer' +token
                },
            }

            setData(true)

            const res = await axios.get('https://api.kontenbase.com/query/api/v1/fbf9b4af-bf38-4f99-9815-a318d90a372a/CATEGORY',config);
            setForm(res.form)
            setData(false)

        } catch (error) {
            console.log(error)
            false
        }
    }

    useEffect(()=>{
        getCategory()
    },[form])
    const datas =form.map((item)=>{
        return {label: item.name, value: item.name}
    })

    const [value,setValue] = useState(null);
    const [isFocus,setIsFocus] =useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
        }
        return null;
      };

  return (
    <View style={styles.container}>
        {renderLabel()}
        <Dropdown
        style={[styles.dropdown, isFocus &&{ borderColor: 'black' }]}
        //  style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={datas}
        search
        maxHeight={300}
        labelField="label"
        valueField='value'
        placeholder={!isFocus? 'category':'...'}
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
    container: {
        
        width: 92,
        height:40,
        
      },
      dropdown: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginBottom : 15,
        borderRadius:5,
        backgroundColor:'rgba(0, 0, 0, 0.1)',
        border:'1px solid  rgba(0, 0, 0, 0.3) '
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
        color: 'grey',
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    // dropdown:{
    //     width:90,
    //     height:40,
    //     borderRadius:5,
    //     backgroundColor:'rgba(0, 0, 0, 0.1)',
    //     border:'1px solid  rgba(0, 0, 0, 0.3) '

    // }
})
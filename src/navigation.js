import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export const NavigationScreen = () => {
    const [data, setdata] = useState(undefined)
    const getApidata = async () => {
        try{
        const re = await fetch('https://simplifiedcoding.net/demos/marvel/')
         const result = await re.json()
        setdata(result)}
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getApidata()
    }, [])
    const navigation=useNavigation();
    const onhandlePress=({item})=>
    
        {navigation.navigate("Details",{item})
    }

    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
            <FlatList
                data={data}
                keyExtractor={( {name} ) => name}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> onhandlePress({item})} >
                        <View style={styles.container}>
                            <View style={styles.border}>
                                <Image
                                    style={{ height: 100, width: 100 }}
                                    source={{
                                        uri: item.imageurl
                                    }}
                                />
                            </View>
                            <View style={styles.border} >
                                <Text>
                                    Name - {item.name}
                                </Text>
                            </View >
                            <View style={styles.border}>
                                <Text>
                                    Realname - {item.realname}
                                </Text>
                            </View>


                        </ View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    border: {
         padding: 5,margin:2
    },
    container: {
        flex: 1, borderWidth: 1, borderColor: 'black', flexDirection: 'row',borderRadius:10
    }
});
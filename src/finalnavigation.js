import { useRoute } from '@react-navigation/native';
import React from 'react';
import {Text,View,StyleSheet,FlatList,Image} from 'react-native';

 export const FinalNavigation=()=>{
  const {params}=useRoute();
    const {item}=params;
    return(
        <View style={{ flex: 1, paddingTop: 20 }}>
           
           
                    <View style={styles.container}>
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
                        <View style={styles.border}>
                            <Text>
                                {item.team}
                            </Text>
                        </View>
                        <View style={styles.border}>
                            <Text>
                                {item.firstappearance}
                            </Text>
                        </View>
                        <View style={styles.border}>
                            <Text>
                                {item.createdby}
                            </Text>
                        </View>
                        <View style={styles.border}>
                            <Text>
                                {item.publisher}
                            </Text>
                        </View>
                        <View style={styles.border}>
                            <Text>
                                {item.bio}
                            </Text>
                        </View>
                        <View style={styles.border}>
                            <Image
                                style={{ height: 300, width: 300 }}
                                source={{
                                    uri: item.imageurl
                                }}
                            />
                        </View>

                    </ View>
            
        </View>
    );
 }
 const styles = StyleSheet.create({
    border: {
     padding: 5
    },
    container: {
        flex: 1, borderWidth: 1, borderColor: 'black', paddingTop: 10, margin: 10
    }
});
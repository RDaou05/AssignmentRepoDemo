import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
// Use Expo's vector icons which are compatible with React Native.
// MaterialCommunityIcons includes several calendar icons; pick the one
// that best matches your design (here we use "calendar-month").
import EvilIcons from '@expo/vector-icons/EvilIcons';


export default function MedManage() {
    return (
        <View style={styles.container}>
                
            <Text>Med-manage</Text>
            {/* Render a native-friendly calendar icon. Specify size and
                    color to match the app theme. */}
            <Pressable onPress={onPressFunction}>
                <Text>HI</Text>
            </Pressable>
                
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
        
 
    },
});
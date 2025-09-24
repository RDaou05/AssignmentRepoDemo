import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
            <EvilIcons name="calendar" size={200} color="mint" />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        
        paddingTop: 60,
    },
    calender: {
        alignItems: 'center',
        backgroundColor: '#b13535ff',
    },
});
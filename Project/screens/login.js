import React from "react";
import { View, Text, Button } from "react-native";

export default function Login({navigation}) {
    return (
        <View>
            <Text>Login Screen</Text>
            <Button title="go to med-manage" 
            onPress={() => navigation.navigate("med-manage")}/>
        </View>

    );
};
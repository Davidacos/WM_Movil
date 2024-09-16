import React from "react";
import {View, Text, Button, SafeAreaView} from "react-native";

export default function HomeScreen(props) {
    const {navigation} = props;

    const goToSettings = () => {
        navigation.navigate("Settings")
    }
    return (
        <SafeAreaView>
            <Text>Estamos en HomeScreen</Text>
            <Text>Estamos en Screen</Text>
            <Text>Estamos en Screen</Text>
            <Text>Estamos en Screen</Text>
            <Text>Estamos en Screen</Text>
            <Text>Estamos en Screen</Text>
            <Text>Estamos en Screen</Text>
            <Text>Estamos en Screen</Text>
            <Button onPress={goToSettings} title="Ir a Ajustes"/>
        </SafeAreaView>
    )
}
import { View, Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen(props) {

    const {navigation} = props;

    const goToPage = (PageName) => {
        navigation.navigate(PageName);
    }

    return (
        <SafeAreaView>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Text>Estamos en SettingsScreen</Text>
            <Button onPress={() => goToPage("Home")} title="Home" />
        </SafeAreaView>
    )
}
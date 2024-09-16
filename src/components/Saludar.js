import {Text} from "react-native";

export default function Saludar(props) {
    const { name} = props;
    return(
        <Text>Hola {name}</Text>
    ) 
    
}

Saludar.defaultProps = {
    name: "William"
}


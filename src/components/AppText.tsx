import { Text, TextProps } from "react-native";

export function AppText(props: TextProps) {
     return <Text {...props} style={[{ fontFamily: 'Inter_400Regular' }, props.style]} />;
}

//ia tentar exportar a fonte para todas as paginas
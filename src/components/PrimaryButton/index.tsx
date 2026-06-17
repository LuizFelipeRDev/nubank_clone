import { Text, TouchableOpacity } from "react-native";
import { styles } from './style';

type Props = {
    text: string
    onPress?: () => void
}


export const PrimaryButton = ({ text,onPress }: Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

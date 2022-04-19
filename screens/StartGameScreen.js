import { View,Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View>
            <Text>hello world ! </Text>
            <PrimaryButton>Tombol 1</PrimaryButton>
            <PrimaryButton>Tombol 2</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;
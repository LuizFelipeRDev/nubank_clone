import { Home } from '../pages/Home';
import { LockScreen } from '../pages/LockScreen';
import { Login } from '../pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLogin" component={Login} />
        <Stack.Screen name="StackLock" component={LockScreen} />
        <Stack.Screen name="StackHome" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
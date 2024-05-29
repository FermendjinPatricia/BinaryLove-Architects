import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import LoginPage from './LoginPage'; // Asigură-te că ai definit corect calea către fișierul LoginPage.js
import mainPageUser from './mainPageUser';
import RegisterPage from './RegisterPage';
import organizerUserPage from './organizerUserPage';
import adminPage from './adminPage';
import addPartyPage from './addPartyPage';
import yourPartiesPage from './yourPartiesPage';
import seeYourRatesPage from './seeYourRatesPage';
import seeYourReportsPage from './seeYourReportsPage';
// import userYourPartyPage from './userYourPartyPage';
//import userSearchParties from './userSearchParties';

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false, // Ascunde bara de navigare
      }}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="mainPageUser" component={mainPageUser} />
        <Stack.Screen name="organizerUserPage" component={organizerUserPage} />
        <Stack.Screen name="adminPage" component={adminPage} />
        <Stack.Screen name="addPartyPage" component={addPartyPage} />
        <Stack.Screen name="yourPartiesPage" component={yourPartiesPage} />
        <Stack.Screen name="seeYourRatesPage" component={seeYourRatesPage} />
        <Stack.Screen name="seeYourReportsPage" component={seeYourReportsPage} />
        {/* <Stack.Screen name="userYourPartyPage" component={userYourPartyPage} />*/}
        {/* <Stack.Screen name="userSearchParties" component={userSearchParties} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
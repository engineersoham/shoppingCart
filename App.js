import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home'
import Favourites from './src/Favourites';
import Categories from './src/Categories';
import More from './src/More'
import { Provider } from 'react-redux';
import { store}  from '../shoppingCart/src/Redux/Store';
import CartPage from './src/Carts';
import AnimTab1 from './src/AnimateTab';
import Details from './src/Details';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown:false}} name="Home" component={Home} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
}


const RootStack = () => {
  return (
    <Stack.Navigator >
      {/* <Stack.Screen name="Home" component={Home}
        options={{ title: 'React-Native Ui', headerShown: true }} />
      <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Tab2" component={AnimTab2} />
      <Stack.Screen name="Tab3" component={AnimTab3} />
      <Stack.Screen name="Tab4" component={Tab4} />
      <Stack.Screen name="Tab5" component={Tab5} />
      <Stack.Screen name="Contacts" component={ContactList} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Screen" component={Screen} />
      <Stack.Screen name="Products" component={ProductsList} />
      <Stack.Screen name="Details" component={DetailsScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}
      />
      // <Stack.Screen name="Fab" component={Fab} />
      <Stack.Screen name="Drawer1" component={DrawerNav1} />

      <Stack.Screen name="HeaderAnim1" component={HeaderAnim1}
        options={{
          gestureEnabled: false,
        }}
      /> */}
      <Stack.Screen 
       options={{ title: 'React-Native Ui', headerShown: false }}
      
      name = "s" component={AnimTab1}/>
      <Stack.Screen 
      options={{ title: 'React-Native Ui', headerShown: false }}
      name="Details" component={Details} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Fab" component={More} />
      
      <Stack.Screen 
      options={{ title: 'React-Native Ui', headerShown: false }}
      name="Cart" component={CartPage} />
      
    </Stack.Navigator>
  )
}

export default function App() {
  return (
   <Provider store={store}>
     <NavigationContainer>
      <RootStack/>
      {/* <MyTabs /> */}
    </NavigationContainer>
   </Provider>
  );
}

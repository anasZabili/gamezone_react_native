import { createDrawerNavigator } from "react-navigation-drawer";
import { creatAppContainer } from "react-navigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from './homeStack'
import About from './aboutStack'

const AppNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

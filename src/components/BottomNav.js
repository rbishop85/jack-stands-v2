// Testing a bottom navigation tab bar
import React from 'react';
import { BottomNavigation } from 'react-native-paper';

// Importing Pages
import Home from '../pages/HomeScreen';
import Garage from '../pages/Garage';
import PartsShelf from '../pages/PartsShelf'
import Inspiration from '../pages/Inspiration';

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-circle' },
    { key: 'garage', title: 'Garage', focusedIcon: 'garage-open-variant', unfocusedIcon: 'garage-variant' },
    { key: 'parts', title: 'Parts Shelf', focusedIcon: 'archive', unfocusedIcon: 'archive-outline' },
    { key: 'inspiration', title: 'Ideas / Inspiration', focusedIcon: 'lightbulb-on', unfocusedIcon: 'lightbulb-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    garage: Garage,
    parts: PartsShelf,
    inspiration: Inspiration,
  });

  // const renderTab = ({ route, color }) => {
  //   return <BottomNavigation.Tab key={route.key} icon={route.icon} label={route.title} />;
  // };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor={"black"}
      inactiveColor={"grey"}
      // sceneAnimationEnabled={true}
      // sceneAnimationType={"shifting"}
      barStyle={{ backgroundColor: 'yellow' }}
      // renderTabBar={props => <BottomNavigation.TabBar {...props} renderTab={renderTab} />}

    />
  );
};

export default BottomNav;
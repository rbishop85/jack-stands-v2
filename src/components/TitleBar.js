import React from 'react';
import { Appbar, Menu } from 'react-native-paper';
// import { getHeaderTitle } from '@react-navigation/elements';

export default function TitleBar({
  // navigation,
  // route,
  // options,
  // back,
}) {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header mode={'center-aligned'} elevated={true} style={{ backgroundColor: "yellow" }}>
      {/* {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null} */}
      <Appbar.Content title={"jackStands"} />
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={openMenu}
            />
          }>
          <Menu.Item
            onPress={() => {
              console.log('Settings was pressed');
            }}
            title="Settings"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 2 was pressed');
            }}
            title="Option 2"
          />
          <Menu.Item
            onPress={() => {
              console.log('Option 3 was pressed');
            }}
            title="Option 3"
            disabled
          />
        </Menu>
    </Appbar.Header>
  );
}
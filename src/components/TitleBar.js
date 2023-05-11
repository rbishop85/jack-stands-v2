import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

export default function TitleBar() {

  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header mode={'center-aligned'} elevated={true} style={{ backgroundColor: "yellow" }}>
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
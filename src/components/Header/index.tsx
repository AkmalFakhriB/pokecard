import React from 'react';

import {Header as HeaderRNE, Icon} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Linking, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native';

type HeaderProps = {
  title: string;
};

const Header = ({title}: HeaderProps) => {
  const docsNavigate = () => {
    Linking.openURL('https://reactnativeelements.com/docs');
  };

  const playgroundNavigate = () => {
    Linking.openURL('https://@rneui/themed.js.org/#');
  };
  return (
    <SafeAreaProvider>
      <HeaderRNE
        backgroundColor="#f77423"
        leftComponent={{
          icon: 'menu',
          color: '#fff',
        }}
        rightComponent={
          <View style={styles.headerRight}>
            <TouchableOpacity onPress={docsNavigate}>
              <Icon name="description" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              // eslint-disable-next-line react-native/no-inline-styles
              style={{marginLeft: 10}}
              onPress={playgroundNavigate}>
              <Icon type="antdesign" name="rocket1" color="white" />
            </TouchableOpacity>
          </View>
        }
        centerComponent={{text: title, style: styles.heading}}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Header;

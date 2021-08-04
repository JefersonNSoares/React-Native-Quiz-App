import React from 'react';
import { View, Button, StyleSheet, Pressable, Text} from 'react-native';

export default function ButtonStart(props) {
  const { onPress, title = 'Vamos Começar!' } = props;
  return (
    <View styles={styles.wrapperCustom}>
    <Pressable
    style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'white'
          : '#FFD55A',
      },
      styles.button,
    ]}
    onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 5,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#293250',
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
});

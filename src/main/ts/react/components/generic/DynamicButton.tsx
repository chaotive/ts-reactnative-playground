import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface DynamicButtonProps {
  value: string,
  onPress: () => any,
  containerStyle?: StyleSheet,
  textStyle?: StyleSheet
}

export function DynamicButton(props: DynamicButtonProps) {
  const containerStyle = [style.containerBase].concat(props.containerStyle);
  const textStyle = [style.textBase].concat(props.textStyle);

  return (
    <TouchableOpacity style={containerStyle} onPress={props.onPress}>
      <Text style={textStyle}>{props.value}</Text>
    </TouchableOpacity>
  )
}

const style: StyleSheet = StyleSheet.create({
  containerBase: {
    justifyContent: 'center',
    minWidth: 50,
    minHeight: 50,
    borderColor: 'gray',
    borderWidth: 1
  },
  textBase: {
    fontWeight: 'bold'
  }
});


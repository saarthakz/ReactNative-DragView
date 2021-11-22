import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View, Image } from 'react-native';
import boundaryCheck from '../functions/boundaryCheck';

export default DragView = ({ parentWidth, parentHeight }) => {

  const length = 1000;
  const coordinates = useRef(new Animated.ValueXY({
    x: 0,
    y: 0,
  })).current;

  const initialState = {
    x: 0,
    y: 0,
  };

  const range = {
    x: parentWidth - length,
    y: parentHeight - length,
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, { dx, dy }) => {
      coordinates.setValue({
        x: initialState.x + dx,
        y: initialState.y + dy
      });
    },
    onPanResponderRelease: (evt, gestureState) => {
      const left = coordinates.x._value;
      const top = coordinates.y._value;
      boundaryCheck(coordinates, left, top, range);
      initialState.x = coordinates.x._value;
      initialState.y = coordinates.y._value;
    },
  });

  const styles = StyleSheet.create({
    box: {
      position: "absolute",
      backgroundColor: 'white',
      width: length,
      height: length,
      borderRadius: 10,
    },
  });

  return (
    <>
      <Animated.View
        {...panResponder.panHandlers}
        style={[coordinates.getLayout(), styles.box]}
      >
        <Image
          source={{
            uri: "https://cdn.hipwallpaper.com/i/84/74/hWNVgT.jpg",
            height: length,
          }}
          style={{ borderRadius: 10 }}
        />
      </Animated.View>
    </>
  );
};

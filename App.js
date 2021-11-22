import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, useWindowDimensions, PanResponder } from 'react-native';
import DragView from './components/DragView';

export default function App() {

  const height = useWindowDimensions().height;
  const width = useWindowDimensions().width;

  const styles = StyleSheet.create({
    container: {
      height: height,
      width: "100%",
      backgroundColor: 'rgb(150, 150, 150)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxContainer: {
      height: "90%",
      width: "90%",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: 10,
      overflow: "hidden",
    },
  });

  return (<>
    <StatusBar backgroundColor="rgb(0, 0, 0)" />
    <SafeAreaView style={styles.container}
    >
      <DragView parentHeight={height} parentWidth={width} />
    </SafeAreaView>
  </>);
}

import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View, I18nManager, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton, Swipeable } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

const AppleStyleSwipeableRow = ({ children, onDelete, onPin, onCall }) => {
  const swipeableRow = useRef(null);

  // Handle Right Swipe Action (More, Delete)
  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      close();
      if (text === 'Delete') {
        onDelete();
      } else if (text === 'More') {
        showMoreOptions();
      }
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Ionicons
            name={text === 'More' ? 'ellipsis-horizontal' : 'trash'}
            size={24}
            color={'#fff'}
            style={{ paddingTop: 10 }}
          />
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  // More options (Pin, Call)
  const showMoreOptions = () => {
    Alert.alert('More Options', 'Choose an option', [
      {
        text: 'Pin',
        onPress: onPin,
      },
      {
        text: 'Call',
        onPress: onCall,
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const close = () => {
    swipeableRow.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRow}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={(progress, _dragAnimatedValue) => (
        <View
          style={{
            width: 192,
            flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
          }}>
          {renderRightAction('More', '#C8C7CD', 192, progress)}
          {renderRightAction('Delete', Colors.red, 128, progress)}
        </View>
      )}
      onSwipeableOpen={(direction) => {
        console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={(direction) => {
        console.log(`Closing swipeable to the ${direction}`);
      }}>
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppleStyleSwipeableRow;

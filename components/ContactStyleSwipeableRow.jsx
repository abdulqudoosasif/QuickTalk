import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Animated, Text, View, I18nManager } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ContactStyleSwipeableRow = ({ children }) => {
  const swipeableRowRef = useRef(null);

  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    const pressHandler = () => {
      close();
      alert(text); // Replaced window.alert with alert for React Native
    };

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton style={[styles.rightAction, { backgroundColor: color }]} onPress={pressHandler}>
          <Ionicons
            name={text === 'More' ? 'ellipsis-horizontal' : 'archive'}
            size={24}
            color="#fff"
            style={{ paddingTop: 10 }}
          />
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress) => (
    <View
      style={{
        width: 192,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}
    >
      {renderRightAction('More', '#C8C7CD', 192, progress)}
      {renderRightAction('Archive', Colors.muted, 128, progress)}
    </View>
  );

  const close = () => {
    swipeableRowRef.current?.close();
  };

  return (
    <Swipeable
      ref={swipeableRowRef}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={renderRightActions}
      onSwipeableOpen={(direction) => {
        console.log(`Opening swipeable from the ${direction}`);
      }}
      onSwipeableClose={(direction) => {
        console.log(`Closing swipeable to the ${direction}`);
      }}
    >
      {children}
    </Swipeable>
  );
};

const styles = {
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
};

export default ContactStyleSwipeableRow;

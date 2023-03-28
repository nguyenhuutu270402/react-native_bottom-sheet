import { StyleSheet, Text, View, useWindowDimensions, Animated, Button, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PanGestureHandler, } from 'react-native-gesture-handler';
const CustomBottomSheet = ({ show, onDismiss, children }) => {
    const { height, width } = useWindowDimensions();
    const bottomSheetHeight = height * 0.5;
    const [open, setOpen] = useState(show)
    const bottomBS = useRef(new Animated.Value(0)).current;
    const onGesture = (event) => {
        if (event.nativeEvent.translationY > 0) {
            bottomBS.setValue(-event.nativeEvent.translationY);
        }
    }
    const onGestureEnd = (event) => {
        if (event.nativeEvent.translationY > bottomSheetHeight / 2.5) {
            onDismiss();
        } else {
            Animated.timing(bottomBS, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }
    }
    useEffect(() => {
        if (show) {
            setOpen(show);
            Animated.timing(bottomBS, {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(bottomBS, {
                toValue: -bottomSheetHeight,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {
                setOpen(false);
                onDismiss();
                console.log("sfjb");
            });
        }
    }, [show])
    if (!open) {
        return null;
    }
    return (
        <View onPress={onDismiss} style={{ position: 'absolute' }}>
            <Pressable onPress={onDismiss} style={{ backgroundColor: 'rgba(0,0,0,0.5)', width: width, height: height, }}>
            </Pressable>
            <Animated.View style={[styles.root, { height: bottomSheetHeight, bottom: bottomBS }]}>
                <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
                    <View>
                        <View style={styles.topHandle}></View>
                        <Button
                            onPress={() => onDismiss()}
                            title="Close bottom sheet" />
                        {children}
                    </View>
                </PanGestureHandler>
            </Animated.View>
        </View>

    )
}

export default CustomBottomSheet

const styles = StyleSheet.create({
    topHandle: {
        width: '90%',
        height: 20,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    root: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#999',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
})
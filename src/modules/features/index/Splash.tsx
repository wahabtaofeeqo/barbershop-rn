import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const SplashScreen = () => {
    return (
        <>
            <SafeAreaView>
                {/* Hide status bar for transculent bar */}
                <StatusBar hidden={true} />
                
                <View style={style.container}>
                   
                    {/* Backgrounds */}
                    <View style={style.backgroundLayer}>
                        <Image 
                            source={require('../../../assets/images/splash_top.png')} 
                            style={style.full}/>

                        <Image 
                            source={require('../../../assets/images/splash_bottom.png')} 
                            style={style.positioned}/>
                    </View>

                    {/* Logo */}
                    <Image 
                        source={require('../../../assets/images/splash.png')} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default SplashScreen

const style = StyleSheet.create({
    full: {
        width: '100%',
        height: '100%'
    },
    
    positioned: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: '#101011'
    },

    backgroundLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    }
})

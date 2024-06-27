import { useState } from "react";
import { Alert, Button, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

const Onboarding = ({navigation}: any) => {
    const [slide, setSlide] = useState(0);

    let slideImage = require('../../../assets/images/onboarding1.png');
    switch (slide) {
        case 0:
            slideImage = require('../../../assets/images/onboarding1.png');
            break;
    
        case 1:
            slideImage = require('../../../assets/images/onboarding2.png');
            break;

        case 2:
            slideImage = require('../../../assets/images/onboarding3.png');
            break;
    }

    const onPress = () => {
        // Alert.alert('This is just a play')
        navigation.navigate('SignUp')
    }

    const activeControlBg = {
        backgroundColor: '#DCF6FF'
    }

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

                    <View style={{flex: 1, padding: 10}}>

                        {/* Header */}
                        <View>
                            {/* Slider Controls */}
                            <View style={style.controlContainer}>
                                <Pressable onPress={() => setSlide(0)}>
                                    <View style={[style.controls, slide == 0 ? activeControlBg : {}]}></View>
                                </Pressable>
                                <Pressable onPress={() => setSlide(1)}>
                                    <View style={[style.controls, slide == 1 ? activeControlBg : {}]}></View>
                                </Pressable>
                                <Pressable onPress={() => setSlide(2)}>
                                    <View style={[style.controls, slide == 2 ? activeControlBg : {}]}></View>
                                </Pressable>
                            </View>

                            <Text style={style.title}>Browse.</Text>
                            <Text style={style.caption}>Explore styles and barbers</Text>
                        </View>
                        
                        {/* Slider container */}
                        <View style={style.sliderContainer}>
                            {/* Slides */}
                            <Image source={slideImage} style={style.slide} />
                        </View>

                        {/* Buttons */}
                        <View>
                            <Pressable style={{marginBottom: 10}} onPress={onPress}>
                                <Text style={style.button}>Next</Text>
                            </Pressable>
                            <Pressable>
                                <Text style={[style.button, {backgroundColor: 'white', color: 'black'}]}>Skip</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

export default Onboarding;


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
        paddingTop: 30,
        paddingBottom: 30,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // position: 'relative',
        backgroundColor: '#101011',
    },

    controlContainer: {
        display: "flex", 
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    controls: {
        width: 12,
        height: 12,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#DCF6FF' 
    },

    backgroundLayer: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
    },

    title: {
        fontWeight: "500", 
        fontSize: 48, 
        color: '#C4C5C6'
    },

    caption: {
        fontWeight: "400", 
        fontSize: 18, 
        color: "#A8ABAB"
    },

    sliderContainer: {
        flex: 2, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    slide: {
        width: '100%', 
        borderRadius: 18
    },

    button: {
        backgroundColor: '#1180AF', 
        color: 'white', 
        fontSize: 14, 
        padding: 18, 
        borderRadius: 28, 
        textAlign: 'center', 
        fontWeight: '500'
    }
})
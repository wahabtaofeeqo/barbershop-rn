import { useState } from "react"
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"

const SignUp = ({navigation}: any) => {
    const [tab, setTab] = useState(1);
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');

    const onPress = () => {

    }

    return (
        <SafeAreaView style={{backgroundColor: '#101011', height: '100%', padding: 16}}>
            <View style={{flex: 3}}>
                <Text style={styles.label}>New User</Text>
                <Text style={styles.title}>Sign Up</Text>

                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <View style={styles.tabs}>
                        <Text style={[styles.tab, tab == 1 ? styles.active : {}]} onPress={() => setTab(1)}>
                            Phone Number
                        </Text>

                        <Text style={[styles.tab, tab == 2 ? styles.active : {}]} onPress={() => setTab(2)}>
                            Email
                        </Text>
                    </View>


                    {
                        tab == 1 
                        ? 
                        <TextInput
                            style={styles.input}
                            placeholder="Input phone number"
                            onChangeText={onChangeText}
                            placeholderTextColor={"#A8ABAB"}
                        /> 
                        : 
                        <View>

                            <TextInput
                                style={[styles.input, {marginBottom: 30}]}
                                placeholder="Input email address"
                                onChangeText={onChangeText}
                                placeholderTextColor={"#A8ABAB"}
                            />

                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                placeholder="Password"
                                onChangeText={onChangeText}
                                placeholderTextColor={"#A8ABAB"}
                            />
                        </View>
                    }

                    <Pressable style={{marginBottom: 10}} onPress={onPress}>
                        <Text style={styles.button}>Sign Up</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', gap: 10}}>
                    <Text style={{color: '#A8ABAB', fontWeight: '300'}}>Existing User?</Text>
                    <Text style={{color: '#1180AF', fontWeight: '500'}}>Login</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: '400',
        color: '#A8ABAB',
        marginTop: 36,
        marginBottom: 10
    },

    title: {
        fontSize: 45,
        fontWeight: '500',
        color: '#C4C5C6',
        marginBottom: 45
    },

    tabs: {
        gap: 24,
        color: '#75797A',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#75797A',
        marginBottom: 10
    },

    tab: {
        color: '#75797A',
        fontSize: 16,
        fontWeight: '500'
    },

    active: {
        color: '#1180AF',
        borderBottomWidth: 2,
        paddingBottom: 10,
        borderBottomColor: '#1180AF'
    },

    input: {
        width: '100%',
        borderWidth: 1,
        padding: 14,
        borderRadius: 10,
        color: '#8E9192',
        marginBottom: 10,
        backgroundColor: '#353637',
    },

    button: {
        backgroundColor: '#1180AF', 
        color: 'white', 
        fontSize: 14, 
        padding: 18, 
        borderRadius: 28, 
        textAlign: 'center', 
        fontWeight: '500',
        marginBottom: 10
    }
})
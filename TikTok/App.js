import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';

export default function App() {
    return ( <View style = { styles.container } >
        <View style={styles.style1}>
            <Image
                source={require('./assets/Ellipse 8.png')}
                style={{width:'150px',height:'150px'}}
            ></Image>
        </View>
        <View style={styles.style2}>
        <Text style={styles.title}>GROW </Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
        </View>
        <View style={styles.style3}>
        <Text style={styles.title1}>We will help you to grow your business using</Text>
        <Text style={styles.title1}>online server</Text>
        </View>
        <View style={styles.style4}>
            <Button title ='LOGIN'></Button>
            <Button title ='SING UP'></Button>
        </View>
        <View style={styles.style5}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#00CCF9'
    },
    style1:{
        flex :2,
        justifyContent:'center',
        alignItems:'center',

    },
    style2:{
        flex : 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    style3:{
        flex : 1,
        justifyContent:'center',
        alignItems:'center',
    },
    style4:{
        flex :1,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    },
    style5:{
        flex:1,
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
    },
    title1:{
        fontSize:13,
        fontWeight:'bold',
    }
});
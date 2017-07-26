import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { screen, system, tool } from './'
export default class NewsListCell extends PureComponent {

    render() {
        let { info } = this.props
        let imageUrl1 = info.img
        let arr = imageUrl1.split('?')  //split() 分割字符串
        let imageUrl = arr[0]
        return (
             <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
                <View style={styles.container}>
                    <Image source={{ uri: imageUrl }} style={styles.icon}/>
                    <View style={{marginRight:10,flexDirection:'column'}}>  
                        <Text style={styles.text} numberOfLines={5}>{info.title}</Text>
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            <Text>{info.lights==0?'':info.lights}</Text>
                            <Text style={{marginLeft:10}}>{info.replies==0?'':info.replies}</Text>
                        </View>   
                    </View>
                </View>
             </TouchableOpacity>
        );
    }
        
 }

    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 82,
        borderBottomWidth: screen.onePixel,
        borderColor: '#e0e0e0',
        backgroundColor: 'white',
    },
    icon: {
        width: 88,
        height: (128/2),
        marginTop:10,
        marginLeft:10,
        // borderRadius: 5,
    },
    text:{
         marginTop:10,
         marginLeft:10,
         paddingRight:0,
         fontSize:15,
         width:screen.width-88-30,
         color:'#494949'
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: '#BE2132'
    }
});
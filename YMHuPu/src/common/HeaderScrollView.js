import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import  { screen, system, tool } from './'
import  {Button1} from './'
var ps =this.props
export default class HeaderScrollView extends PureComponent {
   onPress(){

        // alert('ddd')

   }
  render() {
       var arr2 = ['全部','视频','自由市场','深度','图集','外场'];
        let { onPress, disabled, style, containerStyle, title, activeOpacity } = this.props
    return (
        <View style={styles.container}>
             <ScrollView  ref ='scrollView'>
            <View style={styles.containerV}>
                 <TouchableOpacity onPress={()=>this.onPress()}>
                 <View style={styles.veiws}><Text style={styles.text}>{arr2[0]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                 <View style={styles.veiws}><Text style={styles.text}>{arr2[1]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                 <View style={styles.veiws}><Text style={styles.text}>{arr2[2]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                 <View style={styles.veiws}><Text style={styles.text}>{arr2[3]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                 <View style={styles.veiws}><Text style={styles.text}>{arr2[4]}</Text></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                 <View style={styles.veiws}><Text style={styles.text}>{arr2[5]}</Text></View>
            </TouchableOpacity>
            </View>
        </ScrollView>
        <View style={{backgroundColor:'red', height:0.5}}></View> 
        </View>
       
    );
  }
}
const   Kwidth =  screen.width/5
const styles = StyleSheet.create({
     container: {
        backgroundColor: '#ffffff',
        opacity:0.6,
    },

      containerV: {
       height:37,
       flexDirection:'row',
       alignItems: 'center',
       justifyContent:'flex-start',

    },
    veiws:{ 
        flex:1,
         alignItems:'center',
         justifyContent:'center',
         width:Kwidth,
         backgroundColor:'#ffffff'
    },
     
    text:{
        fontSize:14,
        justifyContent:'center'
    }


})
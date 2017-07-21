import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView ,{ScrollableTabBar}  from 'react-native-scrollable-tab-view'
import color from '../../widget/color'
import { screen, system, tool } from '../../common'

class HPnews extends PureComponent {

    static navigationOptions = ({nativegation}) =>({
         headerRight:(
                <Image 
                  style={{marginRight:6}}
                  source= {require('../../imgs/news/search_btn_1_search@2x.png')}
                />
            )
    })
    
      render() {
           var arr = ['NBA','关注','中国篮球','路人王','国际足球','中国篮球','路人王'];
            return(  
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar/>}
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
                {arr.map((title,i) =>(
                   <View tabLabel={title}  key={i}></View>
                ))}
            </ScrollableTabView>


                 )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
});


export default HPnews;

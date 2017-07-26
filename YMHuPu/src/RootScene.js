/**
 * Copyright (c) 2017-present,chen1230
 * All rights reserved.
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { StatusBar,View,Text,Image } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom,Platform} from 'react-navigation';

import color from './widget/color'
import { screen, system, tool } from './common'
import TabBarItem from './widget/TabBarItem'

import Splash from './pages/Splash/Splash';

import HPcommunity from './pages/Community/HPcommunity'
import HPequipment from './pages/Equipment/HPequipment'
import HPmore from './pages/More/HPmore'
import HPnews from './pages/News/HPnews'
import HPmatchs from './pages/Matchs/HPmatchs'
import HPnewsDetail from './pages/News/HPnwesDetail'


const lightContentScenes = ['HPnews', 'HPmore']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

// create a component
class RootScene extends PureComponent {
    constructor() {
        super()

        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
             <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    };
};
const Tab = TabNavigator(
    {
        News: {
            screen: HPnews,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '新闻',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/nav/news_btn_night@2x.png')}
                        selectedImage={require('./imgs/nav/news_btn_1@2x.png')}
                    />
                )
            }),
        },
        Matchs: {
            screen: HPmatchs,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '比赛',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/nav/games_btn_night@2x.png')}
                        selectedImage={require('./imgs/nav/games_btn_1@2x.png')}
                    />
                )
            }),
        },

        Community: {
            screen: HPcommunity,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '社区',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/nav/bbs_btn_night@2x.png')}
                        selectedImage={require('./imgs/nav/bbs_btn_1@2x.png')}
                    />
                )
            }),
        },

        Equipment: {
            screen: HPequipment,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '装备',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/nav/shoes_btn_night@2x.png')}
                        selectedImage={require('./imgs/nav/shoes_btn_1@2x.png')}
                    />
                )
            }),
        },
        More: {
            screen: HPmore,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '更多',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./imgs/nav/more_btn_night@2x.png')}
                        selectedImage={require('./imgs/nav/more_btn_1@2x.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',//活跃文字，可以渲染icon颜色
            style: { backgroundColor: '#ffffff'},
            showLabel:false,
        },
    }

);

const Navigator = StackNavigator(
    {
	    Splash: { screen: Splash },
        Tab: { screen: Tab },
        HPnewsDetail:{ screen:HPnewsDetail }    
    },
    {
        navigationOptions: {
            headerTitleStyle:{color:'#ffffff',alignSelf:'center'},
            title:'虎扑体育',
            headerStyle: { backgroundColor: color.theme,height:system.isIOS?64:40},
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
            mode:'card',
        },
    }
);
//make this component available to the app
export default RootScene;

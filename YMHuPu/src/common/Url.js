/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { AppRegistry,Platform ,Alert,View,Text} from 'react-native'

const baseUrl = 'http://www.bai.com';
/**
 * 网络请求的工具类
 */
export default {
    
   BaseImages:[],
   Api:{
     home:baseUrl+'haha',
     mine:baseUrl+'haha1'
   } //API 抽出基类
       
  
}

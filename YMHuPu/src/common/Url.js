/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { AppRegistry,Platform ,Alert,View,Text} from 'react-native'

const baseUrl = 'http://games.mobileapi.hupu.com/3/7.1.2';
/**
 * 网络请求的工具类
 */
export default {
    
     BaseImages:[],
     cba:baseUrl+'/cba/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457564&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=3fe0202522e4e3aa787c09e40f15d738&num=20&pre_count=0&preload=0',
     nba:baseUrl+'/nba/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=5622e6f6f217da985dcc0b51a97fdd03&num=20&pre_count=0&preload=0',
     csl:baseUrl+'/csl/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     confederationscup:baseUrl+'/confederationscup/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     epl:baseUrl+'/epl/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     liga:baseUrl+'/liga/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     seri:baseUrl+'/seri/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     bund:baseUrl+'/bund/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     fran:baseUrl+'/fran/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500457952&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=f60fb4c7648cab8f89e2d5fc5ed2f8ed&num=20&pre_count=0&preload=1',
     worldpre:baseUrl+'/worldpre/getNews?time_zone=Asia/Shanghai&direc=next&client=6b47f8d68a8b960a2dd567c4b004728e30cfab89&night=0&crt=1500458386&advId=12AD88A0-95A2-46C9-A5F3-B1C4626BB012&nid=0&sign=2dfc1db575ff9ef8cebe03af1b69fb37&num=20&pre_count=0&preload=1',
    //  nba:baseUrl+''
    //  nba:baseUrl+''
    //API 抽出基类
       
  
}

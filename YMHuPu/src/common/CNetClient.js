/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent,Component } from 'react';
import { AppRegistry,Platform ,Alert,View,Text,ScrollView,ListView,RefreshControl,ToastAndroid} from 'react-native'
import MD5 from "react-native-md5";
/**
 * 网络请求的工具类
 */
export default class CNetClient extends Component{

    //构造函数，默认的props，以及state 都可以在这里初始化了
    constructor(props){
        super(props); 
    }

    /**
     * 普通的get请求 
     * @param {*} url 地址
     * @param {*} params  参数
     * @param {*} callback  成功后的回调
     */
    static get(url,params,callback){
       fetch(url,{
        method:'GET',
        body:params
        })
        .then((response) => {
            if(response.ok){//如果相应码为200
                return response.json(); //将字符串转换为json对象
            }
        })
        .then((json) => {
            //根据接口规范在此判断是否成功，成功后则回调
           callback(json);
            // if(json.resultCode === "SUCCESS"){
            //   alert('SUCCESS')
            //     callback(json);
                
            // }else{
            //    callback(json)
            //     //否则不正确，则进行消息提示
            //     //ToastAndroid 只针对安卓平台，并不跨平台
            //     // ToastAndroid.show(json.resultDesc,ToastAndroid.SHORT);
            //     // alert(json.resultDesc);
                 
            // }
        }).catch(error => {
            // ToastAndroid.show("netword error",ToastAndroid.SHORT);
            alert("netword error:"+error);
            console.log(error);
        });
    };

    /**
     * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
     * @param {*} url 
     * @param {*} service 
     * @param {*} params 
     * @param {*} callback 
     */
    static post(url,service,params,callback){
        //添加公共参数
        var newParams = this.getNewParams(service,params);//接口自身的规范，可以忽略

        fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'//key-value形式
        },
        body:newParams
        })
        .then((response) => {
            if(response.ok){
               return response.json();
            }
        })
        .then((json) => {
            if(json.resultCode === "SUCCESS"){
                callback(json);
            }else{
                // ToastAndroid.show(json.resultDesc,ToastAndroid.SHORT);
            }
        }).catch(error => {
            alert(error);
            //ToastAndroid.show("netword error",ToastAndroid.SHORT);
        });
    };

    /**
     * post json形式  header为'Content-Type': 'application/json'
     * @param {*} url 
     * @param {*} service 
     * @param {*} jsonObj 
     * @param {*} callback 
     */
    static postJson(url,service,jsonObj,callback){
        fetch(url,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body:JSON.stringify(jsonObj),//json对象转换为string
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            }
        })
        .then((json) => {
            if(json.resultCode === "SUCCESS"){
                callback(json);
            }else{
                // ToastAndroid.show(json.resultDesc,ToastAndroid.SHORT);
                 alert(json.resultDesc);
            }
        }).catch(error => {
            // ToastAndroid.show("netword error",ToastAndroid.SHORT);
             alert('netword error');
        });
    };

    /**
     * 获取当前系统时间 yyyyMMddHHmmss
     */
    static getCurrentDate(){
        var space = "";
        var dates = new Date();
        var years = dates.getFullYear();
        var months = dates.getMonth()+1;
        if(months<10){
            months = "0"+months;
        }

        var days = dates.getDate();
        if(days<10){
            days = "0"+days;
        }

        var hours = dates.getHours();
        if(hours<10){
            hours = "0"+hours;
        }

        var mins =dates.getMinutes(); 
        if(mins<10){
            mins = "0"+mins;
        }

        var secs = dates.getSeconds();
        if(secs<10){
            secs = "0"+secs;
        }
        var time = years+space+months+space+days+space+hours+space+mins+space+secs;
        return time;
    };
    

    /**
     * 设置公共参数
     * @param {*} service  服务资源类型
     * @param {*} oldParams 参数 key-value形式的字符串 
     * @return 新的参数
     */
    static getNewParams(service,oldParams){
        var newParams = "";
        var currentDate = this.getCurrentDate();
        var MD5KEY = "XXXXXX";
        var digestStr = MD5KEY+service+currentDate+MD5KEY;
        newParams = oldParams+"&timestamp="+currentDate+"&digest="+this.MD5(digestStr);
        return newParams;
    };

    /**
     * 字符串加密
     * @param {*} str 
     */
    static MD5(str){
        return MD5.hex_md5(str);
    };


    /**
     * 获取当前系统时间 yyyyMMddHH
     */
    static getCurrentDateFormat(format){
        var space = " ";
        var dates = new Date();
        var years = dates.getFullYear();
        var months = dates.getMonth()+1;
        if(months<10){
            months = "0"+months;
        }
        var days = dates.getDate();
        if(days<10){
            days = "0"+days;
        }
        var hours = dates.getHours();
        if(hours<10){
            hours = "0"+hours;
        }

        var mins =dates.getMinutes(); 
        if(mins<10){
            mins = "0"+mins;
        }

        var secs = dates.getSeconds();
        if(secs<10){
            secs = "0"+secs;
        }

        if(format =='yyyy-MM-dd'){
          return years+'-'+months+'-'+days;
        }

        if(format =='yyyy-MM-dd HH:mm:ss'){
          return years+'-'+months+'-'+days+space+hours+':'+mins+':'+secs;
        }

        var time = years+space+months+space+days;
        return time;
    };

     /**
     * 时间戳转时间 
     * prame1  time 时间戳
     * prame2  format 时间格式
     */
    static timeChangeDateFormat(time,format){
      if(time<0) return;
      format = format==null?format:'yyyy-MM-dd' // 默认格式是：yyyy-MM-dd
        var space = " ";
        var dates = new Date(time);
        var years = dates.getFullYear();
        var months = dates.getMonth()+1;
        if(months<10){
            months = "0"+months;
        }
        var days = dates.getDate();
        if(days<10){
            days = "0"+days;
        }
        var hours = dates.getHours();
        if(hours<10){
            hours = "0"+hours;
        }

        var mins =dates.getMinutes(); 
        if(mins<10){
            mins = "0"+mins;
        }

        var secs = dates.getSeconds();
        if(secs<10){
            secs = "0"+secs;
        }

        if(format =='yyyy-MM-dd'){
          return years+'-'+months+'-'+days;
        }

        if(format =='yyyy-MM-dd HH:mm:ss'){
          return years+'-'+months+'-'+days+space+hours+':'+mins+':'+secs;
        }

        if(format =='HH:mm:ss'){
          return hours+':'+mins+':'+secs;
        }

        var time = years+space+months+space+days;
        return time;
    };

}

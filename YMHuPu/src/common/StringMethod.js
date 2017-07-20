/**
 * chen 2017-07-05  
 * StringMethod 字符串相关的检测工具类
 */

import React, { PureComponent } from 'react';
import { AppRegistry,Platform ,Alert,View,Text,ScrollView,ListView,RefreshControl} from 'react-native'

class StringMethod extends PureComponent {
  constructor(props){
    super(props)
  
  }
  render(){
      return(<View></View> )
  }

}
/**
 * chen 2017-07-05  
 * param str
 * method 检测字符串是否为空
 */
export function IsEmptyString(str:String){

   if(str.length==0 ||str==null||str=="null"||str==undefined){     
        return false;
    } else{
        return true;
    }
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测数字是否为空
 */
export function IsNumber(str){
      if(str.length!=0){    
        reg=/^[0-9]*$/;     
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否由英文字母组成
 */
export function IsAllEnglishAlphabet(str){
      if(str.length!=0){    
        reg=/^[A-Za-z]*$/;     
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否由中英文，数字，下划线
 */
export function CheckUserName(str){
      if(str.length!=0){    
        reg=/^[\u4e00-\u9fa5A-Za-z0-9_]*$/;     
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否以字母开头，长度在6-18之间，只能包含字符、数字和下划线
 */
export function IsUserName(str){
      if(str.length!=0){    
        reg=/^[a-zA-Z]\w{5,17}*$/;     
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否为邮箱地址
 */
export function IsEmailAddress(str){
      if(str.length!=0){    
        reg=/^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;     
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否为http
 */
export function CheckHttpSting(str){
      if(str.length!=0){    
        reg= /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/   
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否为身份证号码
 */
export function CheckIDCard(str){
      if(str.length!=0){    
        reg= /^\d{15}(\d{2}[A-Za-z0-9])?$/    
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否为手机号
 */
export function IsMobilePhone(str){
      if(str.length!=0){    
        reg= /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/       
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}

/**
 * chen 2017-07-05  
 * param str
 * method 检测是否为座机号
 */
export function IsTelePhone(str){
      if(str.length!=0){    
        reg= /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/       
        if(reg.test(str)){    
          return true;
        }    
      }  
      return false;
}


export default StringMethod;


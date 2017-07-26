import React, { PureComponent } from 'react'
import {DeviceEventEmitter,NativeEventEmitter,View, Text, StyleSheet, ScrollView,WebView,TouchableOpacity,InteractionManager, ListView,Image } from 'react-native'
import ScrollableTabView ,{ScrollableTabBar}  from 'react-native-scrollable-tab-view'
import color from '../../widget/color'
import { screen, system, tool } from '../../common'
import HeaderScrollView from '../../common/HeaderScrollView'
import CNetClient from '../../common/CNetClient'
import {AutoHeightWebView} from 'react-native-autoheight-webview'
import {requireNativeComponent} from 'react-native'
import  WebViewAutoHeight  from '../../common/WebViewAutoHeight'
var HPWebView = requireNativeComponent('HPWebView', null)
var{NativeModules} =require('react-native');
var HPWebView1 = NativeModules.HPWebView
const myNativeEvt = new NativeEventEmitter(HPWebView1)

export default class HPnewsDetail extends PureComponent {
     
      constructor(props) {
    super(props);
    this.state={
      height:500,
    }
  }

 
  //在组件中使用  
  componentWillMount() {  
    // var self = this;
    // this.listener = DeviceEventEmitter.addListener('sendeIosApp', () =>{alert('ddd')});  //对应了原生端的名字  
  }  
  componentWillUnmount() {  
    // this.listener && this.listener.remove();  //记得remove哦  
    // this.listener = null;  
  }  

     static  navigationOptions = ({navigation}) => ({
        title:navigation.state.params.info.title,
     }) 

     componentDidMount() {
        // HPWebView1.getTextHeight('100')
    //    this.refs.webView.loadHtmlContentWith('<a>dddd<a>')

     }

render(){
    var _scrollView: ScrollView;
    return(<ScrollView style={styles.container}>
            <Text style={styles.text}>雷迪克驳斥不忠诚言论：快船给我打了分手电话</Text>
            <View style={{flexDirection:'row',marginTop:10,marginLeft:12}}>
                <Text style={{color:'gray'}}>10分钟前</Text>
                <Text style={{color:'blue',marginLeft:12}}>今日美国</Text>
            </View>
            <View style={{marginTop:10,height:0.2,backgroundColor:'gray'}}></View>
            <Image source={{uri:'https://c1.hoopchina.com.cn/uploads/star/event/images/170723/thumbnail-d11bfe50a83db73952119a5acab6b91408e69ede.png'}}
                   style={styles.img}
                   resizeMode="stretch"
            />
           
            <WebView
             style={{height:100,width:screen.width-10}}
             bounces={false}
             scrollEnabled={false}
             html='<p>虎扑7月23日讯 今年夏天与76人签下了一年2300万的合同的JJ-雷迪克日前在自己的播客节目中谈到了自己休赛期的决定，他表示自己虽然很享受在快船的四年职业生涯，但天下没有不散之筵席。</p> <p>“我知道很多快船球迷和NBA球迷都会猜测我为什么不回快船，还会有一些无知的人会质疑我的忠诚”，雷迪克说，“但是老实说，回快船其实并不在我的考虑范围内。</p> <p>“去年夏天他们续约了奥斯汀（里弗斯）和贾马尔（克劳福德）时我就猜出来了”，雷迪克继续说道，“在接下来的赛季他们两人有2500万美元的保障薪水，我知道他们（快船）的财务状况无法保证他们长期拥有3位高薪的得分后卫，这是不现实的，你不可能在同一个位置花费三到四千万美元，尤其是你的球队还拥有2到3个顶薪球员的情况下。</p> <p>“劳伦斯-弗兰克（快船运营副总裁）在6月29日（自由球员市场开启前）给我打了电话，他表现得非常职业，我将这通电话称为分手电话，他基本上说的是，我们不会将你带回来了。”</p> <p>上赛季，他代表快船场均上场28.2分钟得到15.0分2.2篮板1.4助攻。</p>'
             automaticallyAdjustContentInsets={true}
             contentInset={{top:0,left:0}}
             onNavigationStateChange={(title)=>{
          if(title.title != undefined) {
            this.setState({
              height:(parseInt('dsdskjdksdsdjdjsdjskdjskjdsjddjsjdskddjsjdsdjkdjkjdksdjskjdjkjsjdskdsjdsjdsjdsjdjfwjfdjfjdfj')+20)
                })
             }
                }}
             >
            </WebView>
        </ScrollView>
    );
}

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    text: {
        fontSize: 20,
        color:'#333333',
        marginTop:10,
        marginLeft:12,
        marginRight:12,
    },
    img: {
        height:220,
        marginLeft:12,
        marginTop:12,
        marginRight:12,
    },

    
})
    
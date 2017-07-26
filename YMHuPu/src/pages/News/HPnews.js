import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,InteractionManager, ListView,Image } from 'react-native'
import ScrollableTabView ,{ScrollableTabBar}  from 'react-native-scrollable-tab-view'
import color from '../../widget/color'
import { screen, system, tool } from '../../common'
import HeaderScrollView from '../../common/HeaderScrollView'
import CNetClient from '../../common/CNetClient'
import NewsListCell from '../../common/NewsListCell'
import RefreshListView from '../../widget/RefreshListView'
import RefreshState from '../../widget/RefreshState'
import Api from '../../common/Url'
var url_api = Api.cba

class HPnews extends PureComponent {
     listView: ListView
    
    state: {
        info: Object,
        dataSource: ListView.DataSource
    }

     constructor(props: Object) {
        super(props);

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            info: {},
            dataSource: ds.cloneWithRows([]),
        }
    }

     componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.listView.startHeaderRefreshing();
        });
    }
    static navigationOptions = ({nativegation}) =>({
         headerRight:(
                <Image 
                  style={{marginRight:6}}
                  source= {require('../../imgs/news/search_btn_1_search@2x.png')}
                />
            )
    })
    
    onPressTab(index){
        switch (index) {
            case 0:
                //NBA
                url_api = Api.cba;
                break;
            case 1:
                //关注
                 url_api = Api.nba;
                break;     
            case 2:
                url_api = Api.csl;
                break;
            case 3:
                url_api = Api.confederationscup;
                break;
             case 4:
                url_api = Api.epl;
                break;
            case 5:
                url_api = Api.liga;
                break;
            case 6:
                url_api = Api.seri;
                break;
            case 7:
                url_api = Api.bund;
                break;  
             case 8:
                url_api = Api.fran;
                break;
            case 8:
                url_api = Api.worldpre;
                break;                                          
            default:
                break;
        }
        this.requestData();

    }

    headerView(i){
        if(i<2){
             return(
             <HeaderScrollView/>
            )
        }else{

        }
    }
    //表头
    renderHeader(i){
        if(i==3||i==5||i==6) {
             return(
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                 <View style={{backgroundColor:'#ffffff',margin:10,height:80,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={{backgroundColor:'red',height:60,width:50,margin:10}}></View>
                    <View style={{backgroundColor:'gray',height:60,width:50,margin:10}}></View>
                    <View style={{backgroundColor:'yellow',height:60,width:50,margin:10}}></View>
                </View>
            </TouchableOpacity>  
             )

        }
        return (null)
    }
      render() {
           var arr1 = ['CBA','NBA','国际足球','中国足球','联合会杯','英超','西甲','意甲','德甲','法甲'];
           var arr2 = ['全部','视频','自由市场','深度','图集','外场'];
            return(  
                <View style={{flex:1}}>
                    <ScrollableTabView
                        renderTabBar={() => <ScrollableTabBar style={{height:33}}/>}
                        style={styles.container}
                        tabBarBackgroundColor='white'
                        tabBarActiveTextColor='#FE566D'
                        tabBarInactiveTextColor='#555555'
                        tabBarTextStyle={styles.tabBarText}
                        tabBarUnderlineStyle={styles.tabBarUnderline}
                        onChangeTab = {(obj) => {
                                // alert(obj.i)
                                this.onPressTab(obj.i)
                        }}
                        initialPage= {0}>
                        {arr1.map((title,i) =>(
                         <View tabLabel={title}  key={i}>
                             {this.headerView(i)}
                            <RefreshListView
                                ref={(e) => this.listView = e}
                                dataSource={this.state.dataSource}
                                renderHeader={() => this.renderHeader(i)}
                                renderRow={(rowData) =>
                                    <NewsListCell
                                         info={rowData}
                                         onPress={() => this.props.navigation.navigate('HPnewsDetail', { info: rowData })}
                                     />
                                }
                                onHeaderRefresh={() => this.requestData()}
                            />

                        </View>
                        ))}
                        
                    </ScrollableTabView>
                </View>
            )
      }

       requestData() {
        const self =this;
        CNetClient.get(url_api,null,function(json){
            let dataList = json.result.data.map((info) =>{
                return {
                    img:info.img,
                    lights:info.lights,
                    nid:info.nid,
                    read:info.read,
                    replies:info.replies,
                    summary:info.summary,
                    title:info.title,
                    uptime:info.uptime,
                }
            });
            self.setState({
                    dataSource: self.state.dataSource.cloneWithRows(dataList)
                })
            setTimeout(() => {
                    self.listView.endRefreshing(RefreshState.NoMoreData)
                }, 500);   
                
         })

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    tabBarText: {
        fontSize: 14,
        marginBottom:10
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
});


export default HPnews;

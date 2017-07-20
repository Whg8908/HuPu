/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import { AppRegistry,Platform ,Alert,View,Text,ScrollView,ListView,RefreshControl} from 'react-native'
import CNetClient from './CNetClient';
import Api from './Url'
// import FileTransfer from 'react-native-file-transfer';
class App extends PureComponent {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2) =>r1 !== r2});
    this.state = {
        dataSource:ds.cloneWithRows([]),
    }
  }

    componentWillMount(){
   


      // this.requestData();
      alert(Api.Api.mine)
      const self =this;   // this 在方法里面时，不能调用全局的方法。const self =this
       CNetClient.get('http://v.juhe.cn/toutiao/index?type=&key=de6a76609f8f2c7b8b8204206eb8f7c0&type=top',null,function(json){

    let dataList = json.result.data.filter(info=>
                  info.author_name != "腾讯财经"
                ).map((info)=> {
                    return {
                        uniquekey:info.uniquekey,
                        title:info.title,
                        date:info.date,
                        category:info.category,
                        author_name:info.author_name,
                        url:info.url,
                        thumbnail_pic_s:info.thumbnail_pic_s,
                        thumbnail_pic_s02:info.thumbnail_pic_s02,
                        thumbnail_pic_s03:info.thumbnail_pic_s03,
                        state:info.state,
                    }
                });
          self.setState({
                    dataSource: self.state.dataSource.cloneWithRows(dataList)
                })

       })

       var time = CNetClient.getCurrentDateFormat('yyyy-MM-dd HH:mm:ss')
       alert(time);
    }
   
  requestData(){
   fetch('http://v.juhe.cn/toutiao/index?type=&key=de6a76609f8f2c7b8b8204206eb8f7c0&type=top')
            .then((response) => response.json())
            .then((json) => {
                console.log(JSON.stringify(json));
                let dataList = json.result.data.filter(info=>
                  info.author_name != "腾讯财经"

                ).map((info)=> {
                  // alert(10+info.title)
                    return {
                        uniquekey:info.uniquekey,
                        title:info.title,
                        date:info.date,
                        category:info.category,
                        author_name:info.author_name,
                        url:info.url,
                        thumbnail_pic_s:info.thumbnail_pic_s,
                        thumbnail_pic_s02:info.thumbnail_pic_s02,
                        thumbnail_pic_s03:info.thumbnail_pic_s03,
                        state:info.state,
                    }
                });
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(dataList)
                })
                // setTimeout(() => {
                //     this.listView.endRefreshing(RefreshState.NoMoreData)
                // }, 500);
            })
            .catch((error) => {
                this.listView.endRefreshing(RefreshState.Failure)
            })
  }

  renderRow(rowData){
    return(<Text>{rowData.title}</Text>)
  }
  render() {
    return (
    <ScrollView>
      <ListView
        {...this.props}
        enableEmptySections
        dataSource = {this.state.dataSource}
        renderRow ={this.renderRow}
      >
      </ListView>
    </ScrollView>
    );
  }
}

export default App;

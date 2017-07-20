/**
 *
 * @content 欢迎页面
 *
 * @author guanhuawei
 * @date 2017/7/20
 * @email 695740001@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */


import React from 'react';
import { Animated } from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import screen from '../../common/screen';

const maxHeight = screen.height;
const maxWidth = screen.width;
const splashImg = require('../../imgs/splash.png');

class Splash extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			bounceValue: new Animated.Value(1)
		};
	}

	componentDidMount() {
		Animated.timing(this.state.bounceValue, {
			toValue: 1.2,
			duration: 1000
		}).start();
		this.timer = setTimeout(() => {
			NavigationUtil.reset(this.props.navigation, 'Tab');
		}, 1000);
	}

	componentWillUnmount() {
		clearTimeout(this.timer);
	}


	render() {
		return (
			<Animated.Image
				style={{
          width: maxWidth,
          height: maxHeight,
          transform: [{ scale: this.state.bounceValue }]
        }}
				source={splashImg}
			/>
		);
	}
}

export default Splash;

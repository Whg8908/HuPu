

/**
 *
 * @content navigation工具类
 *
 * @author guanhuawei
 * @date 2017/7/20
 * @email 695740001@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

import { NavigationActions } from 'react-navigation';

const reset = (navigation, routeName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  });
  navigation.dispatch(resetAction);
};

export default {
  reset
};

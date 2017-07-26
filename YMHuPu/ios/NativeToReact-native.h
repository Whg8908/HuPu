//
//  NativeToReact-native.h
//  YMHuPu
//
//  Created by chen on 2017/7/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <React/RCTEventEmitter.h>

@interface NativeToReact_native : RCTEventEmitter<RCTBridgeModule>

+ (void)sendeHeigthToReactNative:(NSString *)h;
@end

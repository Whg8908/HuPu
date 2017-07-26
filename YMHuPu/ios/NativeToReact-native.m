//
//  NativeToReact-native.m
//  YMHuPu
//
//  Created by chen on 2017/7/25.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "NativeToReact-native.h"

@implementation NativeToReact_native


- (NSArray<NSString *> *)supportedEvents{
  
  return @[@"sendeHeigthToReactNative"];
  
}


+ (void)sendeHeigthToReactNative:(NSString *)h{
  
  NativeToReact_native *a = [NativeToReact_native new];
  [a sendEventWithName:@"sendeIosApp" body:@{
                                             @"height":h
                                             
                                             }];

}

@end

//
//  HPWebView.m
//  YMHuPu
//
//  Created by chen on 2017/7/24.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "HPWebView.h"
#import "HWebView.h"
#import <React/RCTBridge.h>  //进行通信的头文件
#import <React/RCTWebView.h>
#import "NativeToReact-native.h"
//#import <React/RCTViewManager.h>
@interface HPWebViewManager()

@property (nonatomic, strong) UIWebView *webView;

@end
@implementation HPWebViewManager
RCT_EXPORT_MODULE(HPWebView)
RCT_EXPORT_VIEW_PROPERTY(tinColor,UIColor)
- (UIView *)view{

  RCTWebView *wview = [[RCTWebView alloc] initWithFrame:CGRectZero];
  wview.backgroundColor = [UIColor redColor];

  RCTWebView *html = [[RCTWebView alloc] initWithFrame:CGRectMake(0, 0, 500, 200)];
  html.backgroundColor = [UIColor redColor];
//  [wview addSubview:html];
  return wview;

}


RCT_EXPORT_METHOD(getTextHeight:(NSString *)string){
  
  
  dispatch_async(dispatch_get_main_queue(), ^{
    
    CGFloat w = [UIApplication sharedApplication].keyWindow.frame.size.width;
    CGSize titleSize = [string boundingRectWithSize:CGSizeMake(w, MAXFLOAT) options:NSStringDrawingUsesLineFragmentOrigin attributes:@{NSFontAttributeName:[UIFont systemFontOfSize:14]} context:nil].size;
    
    [NativeToReact_native  sendeHeigthToReactNative:[NSString stringWithFormat:@"%f",titleSize.height]];
  });
  

}

- (void)sendeMessage:(NSString*)h{

  [self.bridge.eventDispatcher sendDeviceEventWithName:@"iosApp" body:@{@"name":h}];
  
}



@end

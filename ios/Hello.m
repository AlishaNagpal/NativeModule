//
//  Hello.m
//  NativeModule
//
//  Created by Alisha Nagpal on 05/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(Counter, NSObject)
RCT_EXTERN_METHOD(constantsToExport)
RCT_EXTERN_METHOD(increment)
RCT_EXTERN_METHOD(
                  setCounterValue: (NSString*)value
                  callback:(RCTResponseSenderBlock)
                 )
RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)
RCT_EXTERN_METHOD(
                  decrement: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject
                  )
@end

//
//  Hello.swift
//  NativeModule
//
//  Created by Alisha Nagpal on 05/02/20.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import WeScan
import UIKit
@objc(Counter)
class Counter: UIViewController,ImageScannerControllerDelegate{
  
  var ScannedImage : Any="";
  
  @objc
  func setCounterValue( _ value:String? ,callback:RCTResponseSenderBlock) -> Void {
    let vc = getTopMostViewController()
    DispatchQueue.main.async {
      let scannerViewController = ImageScannerController()
      scannerViewController.imageScannerDelegate = self
      vc?.present(scannerViewController, animated: true)
    }
    callback([self.ScannedImage])
  }
  
  func getTopMostViewController() -> UIViewController? {
    var topMostViewController = UIApplication.shared.keyWindow?.rootViewController
    
    while let presentedViewController = topMostViewController?.presentedViewController {
      topMostViewController = presentedViewController
    }
    return topMostViewController
  }
  
  func imageScannerController(_ scanner: ImageScannerController, didFinishScanningWithResults results: ImageScannerResults) {
    self.ScannedImage = ImageScannerResults.self
    print("image type",ImageScannerResults.self)
    scanner.dismiss(animated: true)
  }
  
  func imageScannerControllerDidCancel(_ scanner: ImageScannerController) {
    scanner.dismiss(animated: true)
  }
  
  func imageScannerController(_ scanner: ImageScannerController, didFailWithError error: Error) {
    print(error)
  }
  
  @objc
  func downloadSheet(_ msg: String?)
  {
    print("calling downloadSheet")
    let vc = getTopMostViewController()
       DispatchQueue.main.async {
          let actionSheetController: UIAlertController = UIAlertController(title: nil, message: msg, preferredStyle: .actionSheet)
            vc?.present(actionSheetController, animated: true){
              print("Item has been printed")
              let when = DispatchTime.now() + 1
              DispatchQueue.main.asyncAfter(deadline: when){
                // your code with delay
                actionSheetController.dismiss(animated: true){
                  print("Item has been dismissed")
                }
              }
            }
        
       }
  }
  
// private var count=0
//private var stringCount=""
//  @objc
//  func constantsToExport() -> [AnyHashable : Any]! {
//    return ["initialCount": 0]
//  }
//
//  @objc
//  func setCounterValue(_ value: String?,
//                       callback: RCTResponseSenderBlock)->Void{
//    self.stringCount = value!
//    print(self.stringCount)
//    callback([self.stringCount])
//  }
//
//  @objc
//  func increment()->Void{
//    count+=1
//    print("count is \(count)")
//  }
//
//  //for decrementing the count
//  @objc
//  func decrement(_ resolve:RCTPromiseResolveBlock,
//                 rejecter reject:RCTPromiseRejectBlock
//                 )->Void{
//    if (count==0){
//      let error = NSError(domain: "", code: 200, userInfo: nil)
//      reject("E_COUNT", "count cannot be negative", error)
//    }else{
//      count -= 1
//      print("count is \(count)")
//      resolve("count was decremented")
//    }
//  }
//
//  @objc
//  func getCount(_ callback: RCTResponseSenderBlock) {
//    callback([count,
//              123.9,               // int or float
//      "third argument",    // string
//      [1, 2.2, "3"],       // array
//      ["a": 1, "b": 2]    // object])
//      ])
//  }
//
//  //to suppress the warning
//  @objc
//  static func requiresMainQueueSetup() -> Bool {
//    return true
//  }
//
}

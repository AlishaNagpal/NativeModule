// import RNImageFilter from 'react-native-image-filter';
// import ImagePicker from 'react-native-image-crop-picker';
// import ToastExample from './src/ToastExample';
//calling from the Android natively 


// selectImage = () => {
  //   ImagePicker.openPicker({
  //     width: 300,
  //     height: 400,
  //     cropping: true
  //   }).then(image => {
  //     console.warn("image from the react : ", image.path);
  //     this.setState({ img: image.path })
  //   });

  // }
  // applyfilter = () => {
  //   RNImageFilter.getSourceImage({
  //     imageSource: this.state.img,
  //     dataType: "Path",
  //     filterType: 1
  //   }, (source) => {
  //     this.setState({ imgBase64: source.base64 });
  //     console.log("SOURCE", source);
  //     // source returns the height, width and the Base64 string of the image.
  //   });
  // }



  // takePhoto = () => {
  //   ImagePicker.openCamera({
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }).then(image => {
  //     this.setState({img2:image.path})
  //     console.warn("from camara : ",image.path);
  //   });
  // }

  // onDoThis() {
  //   Foo.doThis();
  //   let fileUrl = "myFile.jpg";
  //   Foo.download(fileUrl, (result) => {
  //     alert([result]);
  //   });
  // }

  // handleFilter = () => {
  //   NativeModules.ImgFilter.myFun()
  // }

  // handleArgFun = () => {
  //   NativeModules.ImgFilter.fun_withArg(this.state.img, (res) => {
  //     this.setState({ img1: res }, () => alert(res))
  //   })
  // }
 
  // callAndroid = () => {
  //   ToastExample.show('Ghanta...', ToastExample.SHORT);
  //   ToastExample.measureLayout(786, 9, (res, a, b, c) => {
  //     alert("success from android" + res + " " + a + " " + b + " " + c)
  //   }, (err) => {
  //     alert("error from androis", err)
  //   })
  // }



  //Render

  {/* <Button
          title="ImgFilter"
          onPress={() => this.handleFilter()}
        />

        <Button
          title="FunwithArgument"
          onPress={() => this.handleArgFun()}
        />

        <Button
          title="Take Photo"
          onPress={() => this.takePhoto()}
        />
        <Button
          title="Android Toast"
          onPress={() => this.callAndroid()}
        />
        <Button
          title="Apply filter"
          onPress={() => this.applyfilter()}
        />
        <TouchableOpacity
          onPress={() => this.selectImage()}
        >
          <Image
            source={{ uri: this.state.img }}
            style={{ height: 100, width: 100, backgroundColor: "green" }}
          />

        </TouchableOpacity>
        <Image
          source={{ uri: this.state.img1 }}
          style={{ height: 100, width: 100 }}
        />

        <Image
          source={{ uri: this.state.img2 }}
          style={{ height: 100, width: 100 }}
        />
 */}
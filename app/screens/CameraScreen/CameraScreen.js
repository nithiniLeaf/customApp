import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
// import styles from './styles';

const options = {
  title: 'Custom app',
  takenPhotoButtonTitle: 'Take photo with your camera',
  chooseFromLibraryButtonTitle: 'Choose photo from library',
};

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarSource: null,
    };
  }
  choose = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image
          source={this.state.avatarSource}
          style={{width: '100%', height: 300}}
        />
        <TouchableOpacity
          style={{backgroundColor: 'red'}}
          onPress={this.choose}>
          <Text
            style={{
              color: 'white',
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}>
            Select Image
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CameraScreen;

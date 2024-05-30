import React from 'react';
import { StyleSheet, View, Platform, Text, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-web';
import { WebView } from 'react-native-webview';

// Function to convert image to base64 (for web use)
const convertImageToBase64 = (path, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', path);
  xhr.responseType = 'blob';
  xhr.send();
};

const UserSearchParties = () => {
  const [base64Image, setBase64Image] = React.useState(null);

  React.useEffect(() => {
    if (Platform.OS === 'web') {
      // Convert the local image to base64
      convertImageToBase64('..\\assets\\userPageImage.jpg', (base64) => {
        setBase64Image(base64);
      });
    }
  }, []);

  const iframeHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('${base64Image}');
          background-size: cover;
          background-position: center;
        }
        iframe {
          width: 400px;
          height: 350px;
          border: none;
        }
      </style>
    </head>
    <body>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.8597828462566!2d21.244828575149942!3d45.75395691406054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4745675fd6725029%3A0x5286f6cea05353ad!2s%23altfel%20Timisoara!5e0!3m2!1sro!2sro!4v1717105376695!5m2!1sro!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </body>
    </html>
  `;

  if (Platform.OS === 'web') {
    return (
      <ImageBackground source={require('..\\assets\\userPageImage.jpg')} style={styles.imageBackground}>
        <Text style={styles.title}>search</Text>
        <TextInput style={styles.input} placeholder="Type here to search parties" />
      <View style={styles.container}>
        {base64Image ? (
          <div dangerouslySetInnerHTML={{ __html: iframeHtml }} style={styles.webIframeContainer} />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={require('..\\assets\\userPageImage.jpg')} style={styles.imageBackground}>
      <TextInput style={styles.input} />
      <View style={styles.container}>
        <WebView
          originWhitelist={['*']}
          source={{ html: iframeHtml }}
          style={styles.webview}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  webview: {
    width: 400,
    height: 350,
  },
  title: {
    alignSelf: "center",
    fontFamily: "press-start-2p",
    color: "white",
    fontSize: 40,
  },
  webIframeContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#DA6485",
  }
});

export default UserSearchParties;

import { View, Text, Image, Pressable, StyleSheet, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const LaunchScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("SignInScreen"); // Thay "NextScreen" bằng tên màn hình bạn muốn chuyển đến
    }, 1000); // 10s

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Image32.jpg")} resizeMode='stretch' width={100} height={100} />
        <Text>Find Your Dream Job Today</Text>
      </View>
    </View>
  )
}

const deviceWidth = Dimensions.get("window").width;

export default LaunchScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1
    },
    logoContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});

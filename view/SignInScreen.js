import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>
          By continuing, you agree to our Terms of Services and Privacy Policy
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email or phone number</Text>
        <Pressable style={styles.input}></Pressable>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue with password</Text>
      </Pressable>

      <Pressable style={styles.button}>
        <Text style={[styles.buttonText, { color: "white" }]}>
          Send one-time password
        </Text>
      </Pressable>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>----------------------OR----------------------</Text>
      </View>

      <View style={styles.socialButtonContainer}>
        <Pressable style={[styles.socialButton, { backgroundColor: "#f3f4f6" }]}>
          <Text style={[styles.buttonText, { color: "gray" }]}>Continue with Apple</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={[styles.socialButton, { backgroundColor: "#fcf2f1" }]}
        >
          <Text style={[styles.buttonText, { color: "red" }]}>Continue with Google</Text>
        </Pressable>
        <Pressable style={[styles.socialButton, { backgroundColor: "#f0f7fd" }]}>
          <Text style={[styles.buttonText, { color: "blue" }]}>Continue with Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    color: "gray",
  },
  input: {
    marginTop: 10,
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 50,
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  orContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  orText: {
    fontSize: 18,
    color: "gray",
  },
  socialButtonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  socialButton: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
  },
});

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
WebBrowser.maybeCompleteAuthSession();
export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("./../../../assets/images/login.png")}
        style={styles.loginImage}
      />

      <View style={styles.SubContainer}>
        <Text
          style={{ fontSize: 27, color: Colors.WHITE, textAlign: "center" }}
        >
          Let's Find{" "}
          <Text style={{ fontWeight: "bold" }}>
            Professional Cleaning and Repair
          </Text>{" "}
          Service
        </Text>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            marginTop: 10,
            color: Colors.WHITE,
          }}
        >
          Best App to find services to near you which deliever you a
          professional services
        </Text>
        <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={{textAlign:'center',fontSize:17,color:Colors.PRIMARY}}>Lest's Get Started</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  loginImage: {
    width: 230,
    height: 450,
    marginTop: 70,
    borderWidth: 4,
    borderColor: Colors.BLACK,
    borderRadius: 15,
  },
  SubContainer: {
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    height: "70%",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  Button: {
    padding: 15,
    backgroundColor: Colors.WHITE,
    borderRadius: 99,
    marginTop:40,
  },
});

import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { router } from "expo-router";
import { images } from "../constants";
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from "../context/GlobalProvider";
export default function App() {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) {
    router.replace("/home");
    return null; 
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      <LinearGradient
        colors={['#000000', '#1E90FF']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
            <Animatable.Image
              animation="fadeInDown"
              delay={300}
              source={images.logo}
              style={{ width: 130, height: 84, marginTop: 5 }}
              resizeMode="contain"
            />
            <Animatable.Image
              animation="fadeInUp"
              delay={600}
              source={images.cards}
              style={{ width: '100%', height: 298, maxWidth: 380, marginTop: 20 }}
              resizeMode="contain"
            />
            <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-white">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
            <Animatable.Text
              animation="fadeIn"
              delay={900}
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#D3D3D3',
                textAlign: 'center',
                marginTop: 25
              }}
            >
              "Unlock your potential with endless possibilities."
            </Animatable.Text>
            <Animatable.Text
              animation="fadeIn"
              delay={1200}
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#D3D3D3',
                textAlign: 'center',
                marginTop: 10
              }}
            >
              "Innovation is the key to transformation."
            </Animatable.Text>
            <Animatable.Text
              animation="fadeIn"
              delay={1500}
              style={{
                fontSize: 14,
                fontFamily: 'Poppins-Regular',
                color: '#D3D3D3',
                textAlign: 'center',
                marginTop: 10
              }}
            >
              "Join us in shaping the future of creativity."
            </Animatable.Text>
            <Animatable.View animation="bounceIn" delay={1800} style={{ width: '80%', marginTop: 30 }}>
              <CustomButton
                title="Continue With Email"
                handlePress={() => router.push("/signin")}
                containerStyles="w-full mt-7 bg-black text-white"
              />
            </Animatable.View>
            <Animatable.View animation="fadeIn" delay={2000} style={{ marginTop: 40 }}>
              <Text style={{ color: '#D3D3D3', fontSize: 12, textAlign: 'center' }}>
                © 2024 Aora. All rights reserved.
              </Text>
              <Text
                style={{ color: '#C0C0C0', fontSize: 12, textAlign: 'center', marginTop: 5 }}
                onPress={() => Linking.openURL('https://bit.ly/manan_dev')}
              >
                Developer : Manan Telrandhe
              </Text>
            </Animatable.View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#000000" style="light" />
      </LinearGradient>
    </SafeAreaView>
  );
}

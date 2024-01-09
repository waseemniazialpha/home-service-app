import { View, Text, Image,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
export default function Header() {
    const {user , isLoading} = useUser();

  return (
    <View style={styles.container}>
        <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
      {/* <Image source={{uri:user?.imageUrl}} style={styles.userImage}/> */}
      <Image
        source={require("./../../../assets/images/pro.jpg")} style={styles.userImage}/>
      <View>
        <Text style={{color:Colors.WHITE,fontFamily:'outfit'}}>Welcome,</Text>
        {/* <Text style={{color:Colors.WHITE,fontSize:20,fontFamily:'outfit'}}>{user?.fullName}</Text> */}
        <Text style={{color:Colors.WHITE,fontSize:20,fontFamily:'outfit-medium'}}>Waseem Niazi</Text>
      </View>
    </View>
    <FontAwesome name="bookmark-o" size={24} color={Colors.WHITE} />
    </View>
    <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search' style={styles.textInput}/>
        <FontAwesome
        style={styles.searchBtn}
        name="search" size={24} color="black" />
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.PRIMARY,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,

    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99,
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        fontSize:16,
        borderRadius:9,
        width:'85%',
        fontFamily:'outfit'

    },
    searchBarContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        marginTop:15,
        marginBottom:10,
    },
    searchBtn:{
        backgroundColor:Colors.WHITE,
        color:Colors.PRIMARY,
        padding:9,
        borderRadius:8,
    },
})
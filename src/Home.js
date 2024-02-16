import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import  shopingBagHome from '../assets/shopingBagHome.png'
import  searchIcon from '../assets/searchIcon.png'
import AddButton from '../assets/AddButton.png'
import redHeart from '../assets/redHeart.png'
import whiteHeart from '../assets/whiteHeart.png'
import discountImageIcon from '../assets/discountImageIcon.png'
import { productSelector, productReducer, productActions } from './Redux/Slices/ProductSlice';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { cartActions, cartSelector } from './Redux/Slices/CartSlice';
import { useRoute } from "@react-navigation/native"

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch()
  const products = useSelector(productSelector)
  const cart = useSelector(cartSelector)

  const getMovies = async () => {
   
      const response = await fetch('https://dummyjson.com/products');
      const json = await response.json();
      dispatch(productActions.productList(json.products))
      
    
  };

  const addToCart = (item) => {
    dispatch(cartActions.add(item))
  }
  const removeFromCart = (item) => {
    dispatch(cartActions.remove(item.id))
  }
viewDetails = (item) => {
  
}

const favouritesSelect = () => {
  
}
console.log(cart, "CARTS")
  useEffect(() => {
    getMovies();
  }, []);

  renderItem = (item) => {
    return (
      <View style={{backgroundColor:"#FFF8F9FB",    
      //  width:190, 
      //  height:194,
       borderRadius:12,
       marginLeft:20,
       marginRight:20,
       marginTop:15,
       flex:1
       }}>
        <TouchableOpacity onPress={()=> favouritesSelect()} 
        style={{position:'absolute', left:8, top:8}}>
       
        <Image
        resizeMode='contain'
        style={{height:20, width:20, }}
        source={whiteHeart}
      />
     
      </TouchableOpacity>
        <TouchableOpacity 
        style={{marginLeft:10, marginTop:10}}
        onPress={()=> navigation.navigate('Details', {id:item.item.id})}>
        <Image
        resizeMode='contain'
        style={{height:100, width:100, alignContent:'center', marginLeft:27}}
        source={{
          uri: item.item.thumbnail,
        }}
      />
        </TouchableOpacity>
      <View style={{ flexDirection:'row', marginBottom:20}}>
        <View style={{marginLeft:20, marginRight:50}}>
        <Text style={{color:'#1E222B', fontSize:14, 
        fontFamily:'Manrope-SemiBold',
        fontWeight:'600'
        }}>${item.item.price}</Text>
        <Text style={{color:'#616A7D', fontSize:12, 
        fontFamily:'Manrope-Regular',
        fontWeight:'400'
        }}>{item.item.brand}</Text>
        </View>
        
          {/* <TouchableOpacity onPress={()=> removeFromCart(item.item)}> */}
          {/* <TouchableOpacity onPress={()=>{
           
            navigation.navigate("Cart")}}>
          <Text>Remove</Text>
          </TouchableOpacity> */}
          <TouchableOpacity 
          style={{position:'absolute', 
          bottom:0,
          right:10}}
          onPress={()=> addToCart(item.item)}>
        <Image source={AddButton} style={{height:25, width:25, color:'white', 
        
      }}/>
          </TouchableOpacity>
      </View>
      </View>
    )
  } 
  
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <View style={{backgroundColor:"rgb(49, 76, 154)", borderRadius:5, flex:0.32}}>
      <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:52, marginLeft:20}}>
      <Text style={{fontFamily:'Manrope', color:'white', fontSize:22, fontWeight:'600', }}>Hey, Rahul</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Cart")}>
      <Image source={shopingBagHome} style={{height:20, width:20, color:'white', marginRight:20}}/>
      </TouchableOpacity>
      </View>
      
      <View style={{
        backgroundColor:"#153075",
        flexDirection:"row",
        borderRadius:50,
        marginHorizontal:20,
        margin:18,
        
        }}>
          <Image source={searchIcon} style={{height:20, width:20, color:'white',
          //  marginRight:30,
          marginLeft:40,
          marginTop:14
           
           }}/>
      <TextInput 
      placeholder='Search Products or store' placeholderTextColor='white' style={{marginLeft:10}}/>
      </View>
    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:5,
    marginBottom:15
  }}>
      <View style={{marginLeft:20}}>
        <Text style={{color:'#F8F9FB', opacity:0.5, fontWeight:'800', fontSize:11, fontFamily:"Manrope"}}>
          DELIVERY TO
        </Text>
        <Text style={{color:'#F8F9FB', fontSize:14, fontFamily:'Manrope', fontWeight:"500"}}>
          Green Way 3000, Stylhet
        </Text>
      </View>
      <View style={{marginRight:20}}>
    <Text style={{color:'#F8F9FB', opacity:0.5, fontWeight:'800', fontSize:11, fontFamily:"Manrope"}}>
      WITHIN
    </Text>
    <Text style={{color:'#F8F9FB', fontSize:14, fontFamily:'Manrope', fontWeight:"500"}}>
      1 Hour
    </Text>
      </View>
    </View>
    </View>
    <View
    style={{alignItems:'center',
    flex:0.2,
    backgroundColor:'white',
    // marginTop:10
  }}
    >
      <View style={{flexDirection:'row',
      borderRadius:16,
      justifyContent:'space-around', 
      height:123,
      width:269,
      marginTop:8,
      backgroundColor:'#F9B023' }}>
        <View style={{justifyContent:'center'}}>
        <Image source={discountImageIcon} style={{height:68, width:68,
           }}/>
        </View>
        <View style={{marginTop:16 }}>
  <Text style={{
    color:'white',
    fontFamily:'Manrope-Light', 
    fontSize:20,
}}>
   Get 
  </Text>
  <Text style={{
    color:'white',
    fontFamily:'Manrope-Bold', 
    fontSize:25,
    fontWeight:'700'
  }}>
   50% OFF
  </Text>
  <Text style={{
    color:'white',
    fontFamily:'Manrope-Light', 
    fontSize:16,
  }}>
   On first {<Text style={{
    fontFamily:'Manrope-Medium',
    fontWeight:'600'
   }}>03</Text>} order
  </Text>
        </View>
      </View>
      
    </View>
    <View style={{marginTop:10, marginBottom:10, marginLeft:20, }}>
    <Text style={{fontFamily:'Manrope-Medium', 
    fontSize:30,
    fontWeight:'400',
    color:'black'
    }}>
   Recommended
  </Text>
    </View>
    <View style={{flex:0.35, backgroundColor:'white'}}>
  
  <FlatList 
  style={{ flex:1, marginBottom:10 }}
  contentContainerStyle={{flexGrow:1}}
  data={products}
  numColumns={2}
  renderItem={(item, index) => {
   return (
     renderItem(item, index)
   )
  }}
  />
 
 </View>
</View>
  );
};

export default Home;
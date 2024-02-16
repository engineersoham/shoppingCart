import React from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import Back from '../assets/Group_73.png'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productSelector, productReducer, productActions } from './Redux/Slices/ProductSlice';
import { cartActions, cartSelector } from './Redux/Slices/CartSlice';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const CartPage = ({ navigation }) => {

  const [Subtotal, setSubtotal] = useState(0)
  const cart = useSelector(cartSelector)
  const dispatch = useDispatch()
  const products = useSelector(productSelector)
  const addToCart = (item) => {
    dispatch(cartActions.add(item))
  }
  const removeFromCart = (id) => {
    dispatch(cartActions.remove(id))
  }
  let totalPrice = 0;
  const calculateTotal = (quantity, price) => {
    // setSubtotal(Subtotal + (quantity * price))
    totalPrice = totalPrice + (quantity * price)
  }
  console.log(cart, "SSSSSSS")
  return (
    <>
    <View style={{ flex:1, backgroundColor:'rgb(255, 255, 255)'}}>
      <View style={{flexDirection:'row', marginTop:'5%'}}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
      <Image source={Back} style={{marginTop:45, marginLeft:24}}/>      
      </TouchableOpacity>
      <Text style={{color:'black', marginTop:53, marginLeft:24, 
      fontFamily:'Manrope', 
      fontSize:20,
      fontWeight:400,

    }}>Shopping Cart  ({cart.length})</Text>
      </View>

      <ScrollView style={{
        marginHorizontal:30,
        marginBottom:50
      }}>
      {cart.map((item, index) => {
        calculateTotal(item.quantity, item.product.price)
        console.log(item, "KYAAYA")
          return (
            <View style={{flexDirection:'row', justifyContent:'space-between', 
            borderBottomWidth:1,
        borderBottomColor:'#EBEBFB'}}>
             <View style={{flexDirection:'row'}}>
             <Image
        resizeMode='contain'
        style={{height:100, width:50, alignContent:'center', }}
        source={{
          uri: item.product.thumbnail,
        }}/>
              <View>
              <Text style={{color:'black', fontFamily:'Manrope', fontWeight:'500', 
            fontSize:20, marginTop:33, marginLeft:20
            }}>{item.product.brand}</Text>
            <Text style={{
              color:'black', fontFamily:'Manrope', fontWeight:'500', 
              fontSize:20, marginTop:5, marginLeft:20, 
            }}>${item.product.price}</Text>
              </View>
             </View>
             <View style={{flexDirection:'row', marginTop:33}}>
              <TouchableOpacity onPress={()=> removeFromCart(item.product.id)}>
                <Text style={{color:'black', fontFamily:'Manrope', fontWeight:'500', 
              fontSize:20, marginTop:5, }}>-</Text>
              </TouchableOpacity>
                <Text style={{color:'black', fontFamily:'Manrope', fontWeight:'500', 
              fontSize:20, marginTop:5, margin:10  }}>{item.quantity}</Text>
                <TouchableOpacity onPress={()=> addToCart(item.product)}>
                <Text style={{color:'black', fontFamily:'Manrope', fontWeight:'500', 
              fontSize:20, marginTop:5,  }}>+</Text>
              </TouchableOpacity>
             </View>
            </View>

            
          )
        })}
      </ScrollView>
      <View style={{backgroundColor:'#F8F9Fb', borderTopEndRadius:25, borderTopLeftRadius:25, position:'relative', }}>
          <View style={{marginHorizontal:20, marginTop:20,}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10, }}>
          <Text style={{fontFamily:'Manrope', fontSize:16, color:'#616A7D'}}>Subtotal</Text>
          <Text style={{fontFamily:'Manrope', fontSize:16, fontWeight:'600', color:'black'}}>${totalPrice}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
          <Text style={{fontFamily:'Manrope', fontSize:16, color:'#616A7D'}}>Delivery</Text>
          <Text style={{fontFamily:'Manrope', fontSize:16, fontWeight:'600', color:'black'}}>$2</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10,}}>
          <Text style={{fontFamily:'Manrope', fontSize:16, color:'#616A7D'}}>Total</Text>
          <Text style={{fontFamily:'Manrope', fontSize:16, fontWeight:'bold', color:'black'}}>${totalPrice +2}</Text>
          </View>
          </View>
          <TouchableOpacity>
            <View style={{backgroundColor:'blue', marginHorizontal:24, width:327, 
            height:56, 
            borderRadius:22,
            marginTop:40,
            marginBottom:20
            }}>
              <Text style={{alignSelf:'center', color:'white', fontFamily:'Manrope', 
              fontSize:20, 
              fontWeight:'bold',
              marginTop:12,
              }}>Proceed To checkout</Text>
            </View>
            </TouchableOpacity>
      </View>
    </View>
    </>
  );
};

export default CartPage;
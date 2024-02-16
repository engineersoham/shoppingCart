import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRoute } from "@react-navigation/native"
import Back from '../assets/Group_73.png'
import  shoppingBlack from '../assets/shoppingBlack.png'
import Carousel from 'react-native-snap-carousel'
import { useSelector, useDispatch } from 'react-redux';
import { productSelector, productReducer, productActions } from './Redux/Slices/ProductSlice';
import { Pagination } from 'react-native-snap-carousel';
import { cartActions, cartSelector } from './Redux/Slices/CartSlice';
import { Rating } from 'react-native-ratings';




const Details = ({navigation, route}) => {
    const dispatch = useDispatch()
  const products = useSelector(productSelector)
  const cart = useSelector(cartSelector)
  const addToCart = (item) => {
    dispatch(cartActions.add(item))
  }
  const removeFromCart = (item) => {
    dispatch(cartActions.remove(item))
  }
      CarouselCardItem = ({ item, index }) => {
        return (
          <View style={{backgroundColor:'white', width:"100%"}}>
            <Image
            resizeMode='contain'
              source={{uri:item}}
              style={{width:"120%", height:200}}
            />
          </View>
        )
      }

    const [details, setDetails] = useState([])
    const getMovies = async () => {
   
        const response = await fetch(`https://dummyjson.com/products/${route.params.id}`);
        const json = await response.json();
        setDetails(json)
    };
    useEffect(() => {
        getMovies();
      }, []);
      
    return (
        <ScrollView style={{flex:1, backgroundColor:'white'}}>
           
           <View style={{flexDirection:'row', marginHorizontal:10, justifyContent:'space-between'}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={Back} style={{marginTop:45, marginLeft:24}}/>      
            </TouchableOpacity>
            <View>
              <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
              <Image source={shoppingBlack} style={{width:25, height:25, marginTop:50, marginLeft:24}}/> 
              <View style={{ position:'absolute', top:45, left:35,
              height:20,
              width:20,
              borderRadius:50,
              backgroundColor:'#F9B023'}}>
              <Text style={{color:'white', alignSelf:'center', fontSize:14}}>{cart.length}</Text>
              </View>
              </TouchableOpacity>
              
              </View>
            </View>
           

           

<View style={{alignItems:'flex-start', marginLeft:30, marginBottom:10}}>
    <Text style={{fontFamily:'Manrope-Medium', fontSize:52, fontWeight:'300', color:'black'}}>{details.title}</Text>
    <Text style={{fontFamily:'Manrope-Bold', fontSize:52, fontWeight:'300', color:'black', marginTop:-20,}}>{details.brand}</Text>
</View>

<View style={{ alignItems:'flex-start', marginLeft:20, marginBottom:10, flexDirection:'row'}}>
<Rating
                        readonly={true}
                        type='star'
                        ratingColor='#F59E0B'
                        ratingBackgroundColor='#CBD5E1'
                        ratingCount={5}
                        startingValue={details.rating}
                        imageSize={20}
                        fractions={2}
                    />  
                    <Text>110 reviews</Text>
</View>

<View style={{backgroundColor:'white', height:207, width:"100%" }}>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        // ref={isCarousel}
        
        data={details.images}
        // style={{border:2, width:"100%", height:100, backgroundColor:'green'}}
        renderItem={CarouselCardItem}
        sliderWidth={400}
        itemWidth={300}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      <Pagination
              dotsLength={5}
              activeDotIndex={5}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', marginLeft:-200,  }}
              dotStyle={{
                  width: 45,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'black'
              }}
              inactiveDotStyle={{
                width: 45,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'yellow'
              }}
              inactiveDotOpacity={0.5}
              inactiveDotScale={0.6}
            />
    </View>

    <View style={{flexDirection:'row', marginHorizontal:20, marginTop:20}}>
        <Text style={{color:'black', marginRight:10, color:'#2A4BA0', fontFamily:'Manrope', fontSize:16, fontWeight:'700'}}>${details.price}</Text>
        <View style={{backgroundColor:'#2A4BA0', 
        borderRadius:70, 
        width:100, 
        height:30,  }}>
        <Text style={{color:'black', color:'white', fontFamily:'Manrope', fontSize:15, marginTop:2, marginLeft:10}}>{details.discountPercentage}% OFF</Text>
        </View>
    </View>
    
    <View style={{flexDirection:'row', marginHorizontal:20, marginTop:20}}>
       <TouchableOpacity onPress={()=> addToCart(details) }>
       <View style={{width:143,
            marginRight:20,
            height:56, borderWidth:1, borderColor:'blue', borderRadius:20}}>
            <Text style={{alignSelf:'center', marginTop:15, color:'#2A4BA0', 
            fontSize:14, 
            fontFamily:'Manrope-Bold',
            fontWeight:'600'
            }}>Add to Cart</Text>
            </View>
       </TouchableOpacity>
           <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
           <View style={{width:143,  height:56, 
                borderWidth:1, borderColor:'blue', borderRadius:20,
                backgroundColor:'#2A4BA0',
                marginLeft:20
                }}>
            <Text style={{alignSelf:'center', marginTop:15, color:'white', 
            fontSize:14, 
            fontFamily:'Manrope-Bold',
            fontWeight:'600'
            }}>Buy Now</Text>
            </View>
           </TouchableOpacity>
           
    </View>
            <View style={{marginLeft:20, marginRight:20, marginTop:20}}>
                <Text style={{fontSize:16,  
                    color:'#1E222B',
                    fontFamily:'Manrope-Regular',
                    fontWeight:'600',
                    
                    }}>Details</Text>
                <Text 
                numberOfLines={5}
                >{details.description}</Text>
            </View>

        </ScrollView>
    )
}

export default Details;

import { View, Text, ScrollView, Image } from '@tarojs/components'
import React, { useState, useEffect } from 'react';
import Setting from '../../res/my/setting.png'
import './index.less'
import Taro from '@tarojs/taro'
import Avatar from '../../res/index/swiper1.jpg'
import Love from '../../res/my/love.png'
import Fans from '../../res/my/fans.png'
import Cart from '../../res/my/shopping-cart.png'
import Right from '../../res/my/arrow-right.png'
function Histroy() {
    return <View className="history-area">
        <View className="history-item">
            <Text className="number"> 收藏</Text>
            <View><Text style='font-size: 16px;
color: grey;'>6 </Text><Image src={Right} style='width:15px;height:15px' ></Image></View>
        </View>
        <View className="history-item">
            <Text className="number"> 足迹</Text>
            <View><Text style='font-size: 16px;
color: grey;'>25</Text><Image src={Right} style='width:15px;height:15px' ></Image></View>
        </View>
    </View>
}
function Cards() {
    return <View className="info-card-area">
        <View className='info-card'>
            <Image src={Love} className='card-icon'></Image>
            <View className="number-area">
                <Text className="number">1800</Text>
                <Text className="card-title">Favorate</Text>
            </View>
        </View>
        <View className='info-card'>
            <Image src={Fans} className='card-icon'></Image>
            <View className="number-area">
                <Text className="number">100</Text>
                <Text className="card-title">Fans</Text>
            </View>
        </View> <View className='info-card'>
            <Image src={Cart} className='card-icon'></Image>
            <View className="number-area">
                <Text className="number">15</Text>
                <Text className="card-title">Cart</Text>
            </View>
        </View>
    </View>
}
function My() {
    return (
        <View className="My-Page">
            <View className='info-area'>
                <Image src={Setting} className='setting'></Image>
                <View className='avatar-block'>
                    <Image src={Avatar} className='avatar'></Image>
                </View>
                <Text className='name'>Micheal Rogers</Text>
                <Text className="autograph">descrpition..descrpition..descrpition..</Text>
            </View>
            <Cards></Cards>
            <Histroy></Histroy>
            <View className="recommend">
                <Text className="number">Recommend</Text>
                <View className='recommend-item'><Image className='recommend-img' src={Avatar} ></Image></View>
            </View>
        </View>
    );

}


export default My;


import { View, Text, ScrollView, Image, Icon, Swiper, SwiperItem, Input, } from '@tarojs/components'
import React, { useState, useEffect } from 'react';
import './index.less'
import Taro from '@tarojs/taro'
import p1 from '../../res/index/1.jpg'
import p2 from '../../res/index/2.jpg'
import p3 from '../../res/index/3.jpg'
import p4 from '../../res/index/4.jpg'
import p5 from '../../res/index/5.jpg'
import p6 from '../../res/index/6.jpg'
import heart from '../../res/index/heart.png'
import onHeart from '../../res/index/on_heart.png'
import search from '../../res/index/search.png'
import S1 from '../../res/index/swiper1.jpg'
import S2 from '../../res/index/swiper2.jpg'
import S3 from '../../res/index/swiper3.jpg'
interface GoodCardItem {
  imgUrl: string,

}

function MySwiper() {
  return <Swiper
    className='swiper-area'
    indicatorColor='#999'
    indicatorActiveColor='#333'
    circular
    indicatorDots
    autoplay={true}>
    <SwiperItem className='swiper-img'>
      <Image src={S1} ></Image>
    </SwiperItem>
    <SwiperItem className='swiper-img'>
      <Image src={S2} ></Image>
    </SwiperItem>
    <SwiperItem className='swiper-img'>
      <Image src={S3} ></Image>
    </SwiperItem>
  </Swiper>
}

function GoodCard(props: {
  item: GoodCardItem
  position: number
}) {
  const [liking, setLiking] = useState(false)

  return <View className={props.position == 1 ? 'product-card-l' : 'product-card-r'}>
    <View className='card-content'>
      <Text className="tittle">Sneakers</Text>
      <View className="description" ><Text>description..description..description..description..</Text></View>
      <View className="product-img" >
        <Image className="img" src={props.item.imgUrl}></Image>
      </View>
      <View className="flex-row-between last-row">
        <View>
          <View className="price"><Text >$699</Text></View>
        </View>
        <View className="like-Icon">
          <Image className="like" onClick={() => { setLiking(!liking) }} src={liking ? onHeart : heart}></Image>
        </View>
      </View>
    </View>
  </ View>
}

function CardList(props: {
  position: number,
  items: GoodCardItem[]
}) {
  return <View>{props.items.map((item, index) => {
    return <GoodCard item={item} position={props.position}></GoodCard>
  })}</View>
}
function Index() {
  const [imgLeftList, setimgLeftList] = useState([
    { imgUrl: p3 }, { imgUrl: p1 }, { imgUrl: p2 },
  ])
  const [imgRightList, setimgRightList] = useState([
    { imgUrl: p4 }, { imgUrl: p5 }, { imgUrl: p6 },
  ])


  return (
    <View className="index-page">
      <ScrollView
        scrollY={true}
        scrollWithAnimation={true}
        enableFlex={true}>
        <MySwiper></MySwiper>

        <View className="search-area">
          <Image src={search} style='width: 20px;height: 20px;margin-right:5px'></Image>
          <Input type='text' placeholder='Search' className='search' />
        </View>

        <ScrollView
          scrollX={true}
        >
          <View className="nav-row">
            <View className="nav-item">
              illustrations
            </View>
            <View className="nav-item">
              ui/ux
            </View>
            <View className="nav-item">
              animation
            </View>
            <View className="nav-item">
              photograph
            </View>
          </View>
        </ScrollView>
        <View className="divide-line"></View>
        <View className='list-content'>
          <CardList items={imgLeftList} position={1}></CardList>
          <CardList items={imgRightList} position={2}></CardList>
        </View>
      </ScrollView>
    </View >
  );

}


export default Index;

// 610326199706250226
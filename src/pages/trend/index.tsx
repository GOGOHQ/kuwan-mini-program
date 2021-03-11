import { View, Text, ScrollView, Image } from '@tarojs/components'
import React, { useState, useEffect } from 'react';
import Search from '../../res/trend/search.png'
import Camera from '../../res/trend/camera.png'
import p1 from '../../res/trend/1.png'
import p2 from '../../res/trend/2.png'
import p3 from '../../res/trend/3.png'
import p4 from '../../res/trend/4.png'
import p5 from '../../res/trend/5.png'
import p6 from '../../res/trend/6.png'
import heart from '../../res/index/heart.png'
import Avatar from '../../res/trend/avatar.jpg'
import onHeart from '../../res/index/on_heart.png'
import './index.less'
import Taro from '@tarojs/taro'
interface TrendCardItem {
    imgUrl: string,

}
function TrendCard(props: {
    item: TrendCardItem
    position: number
}) {
    const [liking, setLiking] = useState(false)
    return <View className={props.position == 1 ? 'trend-card-l' : 'trend-card-r'}>
        <View className="card-content">
            <Image className="img" src={props.item.imgUrl}></Image>
            <Text className="description">描述描述描述描述描述描述描述描述</Text>
            <View className="last-row">
                <View>
                    <Image className="miniAvatar" src={Avatar}></Image>
                    <Text className="nickName">程潇</Text>
                </View>
                <View>
                    <Image className="like" onClick={() => { setLiking(!liking) }} src={liking ? onHeart : heart}></Image>
                    <Text className="likeNum">600</Text>
                </View>
            </View>
        </View>
    </View>

}
function TrendList(props: {
    position: number,
    items: TrendCardItem[]
}) {
    return <View>{props.items.map((item, index) => {
        return <TrendCard item={item} position={props.position}></TrendCard>
    })}</View>
}
function Trend() {
    const [imgLeftList, setimgLeftList] = useState([
        { imgUrl: p3 }, { imgUrl: p1 }, { imgUrl: p2 },
        { imgUrl: p3 }, { imgUrl: p1 }, { imgUrl: p2 },
        { imgUrl: p3 }, { imgUrl: p1 }, { imgUrl: p2 },
        
    ])
    const [imgRightList, setimgRightList] = useState([
        { imgUrl: p4 }, { imgUrl: p5 }, { imgUrl: p6 },
        { imgUrl: p4 }, { imgUrl: p5 }, { imgUrl: p6 },
        { imgUrl: p4 }, { imgUrl: p5 }, { imgUrl: p6 },
        
    ])
    return <View className="trend-page">
        <View className="nav-area">
            <Image style="width:20px;height:20px" src={Search}></Image>
            <View className="nav-block">
                <Text className="active">关注</Text>

                <Text className="unactive">推荐</Text>
            </View>
            <Image style="width:25px;height:25px" src={Camera}></Image>
        </View>
        <View className='list-content'>

            <TrendList items={imgLeftList} position={1}></TrendList>
            <TrendList items={imgRightList} position={2}></TrendList>


        </View>
    </View>
}


export default Trend;


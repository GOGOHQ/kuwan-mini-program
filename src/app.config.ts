export default {
  pages: [
    'pages/index/index',
    'pages/trend/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '酷玩',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        iconPath: 'res/tabbar/shop.png',
        selectedIconPath: 'res/tabbar/shop-fill.png',
        pagePath: 'pages/index/index',
        text: '首页'
      }, {
        iconPath: 'res/tabbar/trend.png',
        selectedIconPath: 'res/tabbar/trend-fill.png',
        pagePath: 'pages/trend/index',
        text: '动态',

      }, {
        iconPath: 'res/tabbar/my.png',
        selectedIconPath: 'res/tabbar/my-fill.png',
        pagePath: 'pages/my/index',
        text: '我的',

      },

    ],
    'color': '#bfbfbf',
    'selectedColor': '#000000',
    'backgroundColor': '#fff',
    'borderStyle': 'black'
  },
}

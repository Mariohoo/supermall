module.exports = {
  plugins: {
    autoprefixer: {}
    "postcss-px-to-viewport":{
      viewportWidth:375,
      viewportHeight:667,
      unitPrecision:5,
      viewportUnit:'vw',
      minPixelValue:1,
      mediaQuery:false,
      selectorBlackList:['tab-bar'],
      exclude:[/TabBar/]

    }
  }
}

import AMap from 'AMap'
const map = {
  geolocation () {
    return new Promise((resolve, reject) => {
      AMap.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 100000000
        })
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          resolve(data)
        })
        AMap.event.addListener(geolocation, 'error', (data) => {
          reject(data)
        })
      })
    })
  },
  search (key) {
    return new Promise((resolve, reject) => {
      AMap.plugin(['AMap.PlaceSearch'], () => {
        var placeSearch = new AMap.PlaceSearch({
          city: 'beijing'
        })
        placeSearch.search(key, (status, result) => {
          if (result.poiList) {
            resolve(result.poiList.pois)
          }
        })
      })
    })
  }
}
export default map

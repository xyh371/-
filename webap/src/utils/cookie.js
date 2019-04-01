const CookieUtil = {
  // 设置cookie
  set: (name, value, expires, domain, path, secure) => {
    let cookieText = ''
    cookieText += encodeURIComponent(name) + '=' + encodeURIComponent(value)
    if (expires instanceof Date) {
      cookieText += '; expires=' + expires.toGMTString()
    }
    if (path) {
      cookieText += '; path=' + path
    }
    if (domain) {
      cookieText += '; domain=' + domain
    }
    if (secure) {
      cookieText += '; secure'
    }
    document.cookie = cookieText
  },
  // 获取cookie
  get: function (name) {
    let cookieName = encodeURIComponent(name) + '='
    let cookieStart = document.cookie.indexOf(cookieName)
    let cookieValue = ''
    if (cookieStart > -1) {
      let cookieEnd = document.cookie.indexOf(';', cookieStart)
      if (cookieEnd === -1) {
        cookieEnd = document.cookie.length
      }
      cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
    }
    return cookieValue
  },
  // 删除cookie
  unset: function (name, domain, path, secure) {
    this.set(name, '', Date(0), domain, path, secure)
  }
}
export default CookieUtil

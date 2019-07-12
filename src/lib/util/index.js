function isMobilePhone () {
  const regular = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  if (navigator.userAgent.match(regular)) {
    return true
  }

  return false
}

export default {
  isMobilePhone
}

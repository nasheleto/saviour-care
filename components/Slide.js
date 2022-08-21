function Slide(options) {
  const container = document.createElement('div')
  container.classList.add('slider__slide')

  const title = Title(options.index)
  const userInfo = UserInfo(options)
  
  container.append(title, userInfo)

  return container
}

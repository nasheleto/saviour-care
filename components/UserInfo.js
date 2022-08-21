function UserInfo(options) {
  const sliderInfo = document.createElement('div')
  sliderInfo.classList.add('slide__info')

  const avatar = Avatar(options.avatar)
  const user = User(options.name, options.service)
  const testimonial = Testimonial(options.text)
  
  const photoText = document.createElement('div')
  photoText.classList.add('slide__photo-text')

  photoText.append(avatar, user)
  sliderInfo.append(photoText, testimonial)

  return sliderInfo
}

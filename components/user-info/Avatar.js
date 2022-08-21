function Avatar(url) {
  const sliderAvatar = document.createElement('div')
  sliderAvatar.classList.add('slide__avatar')

  const avatarImg = document.createElement('img')
  avatarImg.src = url

  sliderAvatar.append(avatarImg)

  return sliderAvatar
}

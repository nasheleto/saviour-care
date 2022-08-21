function User(name, service) {
  const sliderUser = document.createElement('div')
  sliderUser.classList.add('slide__user')

  const sliderName = document.createElement('div')
  sliderName.classList.add('slide__name')
  sliderName.textContent = name

  const sliderService = document.createElement('div')
  sliderService.classList.add('slide__service')
  sliderService.textContent = service

  sliderUser.append(sliderName, sliderService)

  return sliderUser
}

function Title(index) {
  const titleContainer = document.createElement('div')
  titleContainer.classList.add('slide__title-container')

  const title = document.createElement('div')
  title.classList.add('slide__title')
  title.textContent = `What our customers are saying ${index}`

  const border = document.createElement('div')
  border.classList.add('slide__title-border')

  titleContainer.append(title, border)

  return titleContainer
}

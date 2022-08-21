const data = [
  { avatar: 'https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png', name: 'John Carter', service: 'MRT', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec turpis enim. Interdum et malesuada fames ac.' },
  { avatar: 'https://pickaface.net/gallery/avatar/unr_randomavatar_170412_0236_9n4c2i.png', name: 'Peter Maximoff', service: 'Cardiologie', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id porta arcu. Aliquam rhoncus pellentesque risus sit. ' },
  { avatar: 'https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png', name: 'Pavel Volya', service: 'Surgery', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat varius enim sit amet porta. Praesent vitae. ' },
  { avatar: 'https://pickaface.net/gallery/avatar/unr_randomguy_190409_1742_4g5.png', name: 'Oleh Pohorilyy', service: 'Massage', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum pulvinar leo at pellentesque. Hac habitasse. ' }
]

const container = document.querySelector('.slider')
const slides = data.map((option, index) => Slide({ ...option, index }))

const arrowLeft = document.querySelector('.left.arrow')
const arrowRight = document.querySelector('.right.arrow')
const dots = [...document.querySelectorAll('.dots > .dot')]

const navigation = {
  container,
  controls: {
    left: arrowLeft,
    right: arrowRight,
    dots,
  },
  gap: 50,
  previousSlide: 1,
  slide: 1,
  slides,
  highlightDot: function(previous, next) {
    this.controls.dots[previous].classList.remove('highlight')
    this.controls.dots[next].classList.add('highlight')
  },
  back: function() {
    const slide = this.slide === 0 ? this.slides.length - 1 : this.slide - 1
    this.show(slide)
  },
  forward: function() {
    const slide = this.slide === this.slides.length - 1 ? 0 : this.slide + 1
    this.show(slide)
  },
  show: function(index) {
    this.slide = index
    this.highlightDot(this.previousSlide, index)
    this.displaySlide()
    this.previousSlide = index
  },
  displaySlide: function() {
    const sliderWidth = this.container.clientWidth

    this.slides.forEach((slide, idx) => {
      slide.style.left = `${(-this.slide + idx) * (sliderWidth + this.gap)}px`
    })
  },
  init: function() {
    this.controls.left.addEventListener('click', () => this.back())
    this.controls.right.addEventListener('click', () => this.forward())
    this.controls.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.show(index))
    })

    this.show(1)
    this.container.append(...this.slides)
  }
}

navigation.init()

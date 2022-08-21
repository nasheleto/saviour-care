function Testimonial(text) {
  const testimonial = document.createElement('q')
  testimonial.classList.add('slide__testimonial')
  testimonial.textContent = text

  return testimonial
}

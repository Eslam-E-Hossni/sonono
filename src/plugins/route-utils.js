export default (_, inject) => {
  inject('scrollFix', (hash) => {
    const strippedHash = hash.replace('#', '')
    const element = document.querySelector(`section[id="${strippedHash}"]`)
    setTimeout(() => {
      if (element) {
        window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
      }
    }, 0)
  })
}

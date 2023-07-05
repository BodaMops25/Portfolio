function ScrollModule(scrollingNode, scrollBarNode, paralax_node_scale) {

  this.scroll_FPS = 60,
  this.scroll_scale = 5,
  this.keyboard_scroll_scale = 50,
  this.scroll_smoothness = 10,
  this.scroll_interval_brake_step = 10,
  this.scrollingNode = scrollingNode,
  this.scrollingHeight = this.scrollingNode.scrollHeight - window.innerHeight,
  this.scroll_to_node_bias = 30,

  this.scrollBar = {
    scrollBarNode: scrollBarNode,
    scrollLineNode: scrollBarNode.querySelector('.scrollLine'),
    scrollKnobNode: scrollBarNode.querySelector('.scrollKnob'),
  },

  this.scrollTo = 0,
  this.scrollInterval = null,

  this.smoothScrollTo = y => {
    if(y < 0) this.scrollTo = 0
    else if(this.scrollingHeight < y) this.scrollTo = this.scrollingHeight
    else this.scrollTo = y

    if(this.scrollInterval === null) {
      this.scrollInterval = setInterval(() => {

      const curY = this.scrollingNode.scrollTop,
            scrollToY = Math.round(curY + (this.scrollTo - curY) / this.scroll_smoothness)

      this.scrollingNode.scrollTo(0, scrollToY)

      this.scrollBar.scrollKnobNode.style.top = scrollToY / this.scrollingHeight * (this.scrollBar.scrollLineNode.offsetHeight - this.scrollBar.scrollKnobNode.offsetHeight) + 'px'

      if(curY - this.scroll_interval_brake_step <= this.scrollTo && this.scrollTo <= curY + this.scroll_interval_brake_step) {
        clearInterval(this.scrollInterval)
        this.scrollInterval = null
      }

      }, 1000 / this.scroll_FPS)
    }
  },

  this.smoothScrollToNode = node => {
    this.smoothScrollTo((node.offsetTop - this.scroll_to_node_bias) * paralax_node_scale)
  },

  this.makeSmoothScroll = deltaY => {
    this.scrollTo += deltaY * this.scroll_scale
    if(this.scrollTo < 0) this.scrollTo = 0
    else if(this.scrollingHeight < this.scrollTo) this.scrollTo = this.scrollingHeight
    this.smoothScrollTo(this.scrollTo)
  }

  document.addEventListener('wheel', ({deltaY}) => {
    this.makeSmoothScroll(deltaY)
  })

  document.addEventListener('keydown', ({key, code}) => {
    if(code === 'ArrowUp') this.makeSmoothScroll(-this.keyboard_scroll_scale)
    else if(code === 'ArrowDown') this.makeSmoothScroll(this.keyboard_scroll_scale)
  })

  document.querySelectorAll('a[href*="#"]').forEach(link => {
    const linkNode = document.querySelector(link.getAttribute('href'))
    link.addEventListener('click', () => {
      this.smoothScrollToNode(linkNode)
    })
  })

  this.isMouseScrolling = false

  this.scrollBar.scrollBarNode.addEventListener('mousedown', e => {
    this.isMouseScrolling = true
    document.documentElement.style.userSelect = 'none'

    const eY = e.clientY - this.scrollBar.scrollLineNode.offsetTop,
          toY = Math.round(eY / this.scrollBar.scrollLineNode.clientHeight * this.scrollingHeight)

    this.smoothScrollTo(toY)
  })

  document.addEventListener('mousemove', e => {
    if(this.isMouseScrolling) {
      const eY = e.clientY - this.scrollBar.scrollLineNode.offsetTop,
          toY = Math.round(eY / this.scrollBar.scrollLineNode.clientHeight * this.scrollingHeight)

      this.smoothScrollTo(toY)
    }
  })

  document.addEventListener('mouseup', () => {
    this.isMouseScrolling = false
    document.documentElement.style.userSelect = ''
  })

}
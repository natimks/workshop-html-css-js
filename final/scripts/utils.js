function createElement(tag, className, attrs) {
  const el = document.createElement(tag)

  if (className) {
    el.setAttribute('class', className)
  }

  for (var key in attrs) {
    el.setAttribute(key, attrs[key])
  }

  return el
}

function createSection(className, attrs) {
  return createElement('section', className, attrs)
}

function createButton(label, type) {
  const button = createElement('button', `button button--${type}`)
  button.innerHTML = label
  return button
}

export {
  createElement,
  createSection,
  createButton
}
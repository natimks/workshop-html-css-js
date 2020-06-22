import { createElement, createSection, createButton } from './utils.js'

import offers from '../mock/offers.js'

function createDiscountBadge(discount) {

  const discountBadge = createElement('label', 'discount-badge')
  discountBadge.innerHTML = 'Desconto de até: '

  const discountValue = createElement('span', 'discount-badge__value')
  discountValue.innerHTML = `${discount}%`

  discountBadge.append(discountValue)

  return discountBadge
}

function createHeader(offer) {
  const header = createElement('header', 'offer__header')

  const companyLogo = createElement('img', '', {
    src: offer.companyLogo,
    alt: offer.companyName,
  })

  const discountBadge = createDiscountBadge(offer.discount);

  header.append(companyLogo, discountBadge)

  return header;
}

function createTags(tags) {
  return tags.map((tag) => {
    const tagElement = createElement('span', `tag tag--${tag.type}`)
    tagElement.innerHTML = tag.label
    return tagElement
  })
}

function createTagsSection(tags) {
  const tagsSection = createSection('offer__tags')
  const tagElements = createTags(tags)
  tagsSection.append(...tagElements)
  return tagsSection
}

function createDetailItem(detail) {
  const label = createElement('dt')
  label.innerHTML = detail.label

  const value = createElement('dd')
  value.innerHTML = detail.value

  return [label, value]
}

function createDetailsSection(details) {
  const detailsSection = createSection('offer-details')
  const detailsList = createElement('section', 'offer-details__list')
  const button = createElement('button', 'offer-details__more')
  button.innerHTML = 'Mais detalhes'

  detailsSection.append(detailsList)
  detailsSection.append(button)

  const detailItems = details.flatMap(detail => (
    createDetailItem(detail)
  ))

  detailsList.append(...detailItems)

  return detailsSection
}

function createValueBox(label, value, isFeatured) {
  const valueBox = createElement('label', `offer-value offer-value--${isFeatured ? 'featured' : 'default'}`)
  valueBox.innerHTML = label

  const valueText = createElement('p')
  valueText.innerHTML = value

  valueBox.append(valueText)

  return valueBox
}

function createValuesSection(offer) {
  const valuesSection = createSection('offer__values')
  const originalValue = createValueBox('De:', offer.originalValue)
  const discountedValue = createValueBox('Por:', offer.discountedValue, true)

  valuesSection.append(originalValue, discountedValue)

  return valuesSection
}

function createOfferCard(offer) {
  const offerCard = createSection('offer card')
  const headerSection = createHeader(offer)
  const tagsSection = createTagsSection(offer.tags)
  const detailsSection = createDetailsSection(offer.details)
  const valuesSection = createValuesSection(offer)
  const seeOfferButton = createButton('Ver oferta', 'primary')

  offerCard.append(
    headerSection,
    tagsSection,
    detailsSection,
    valuesSection,
    seeOfferButton
  )

  return offerCard
}


function renderOfferList(offers) {
  const cards = offers.map(createOfferCard)
  const list = document.querySelector('.offers-list')

  list.append(...cards)
}


renderOfferList(offers)
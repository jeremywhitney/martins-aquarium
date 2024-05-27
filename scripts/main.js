import { fishList } from './fishList.js'
import { tipList } from './tipList.js'
import { locationList } from './locationList.js'
 
// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element
const renderFishListToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList')

    if (fishList) {
        fishList.innerHTML = fishHTML
    } else {
        console.error('"Could not find element with id "fishList"')
    }
}
renderFishListToDOM(fishHTML)

const renderTipListToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList')

    if (tipList) {
        tipList.innerHTML = tipHTML
    } else {
        console.error('"Could not find element with id "tipList"')
    }
}
renderTipListToDOM(tipHTML)

const renderLocationListToDOM = (locationHTML) => {
    const locationList = document.getElementById('locationList')

    if (locationList) {
        locationList.innerHTML = locationHTML
    } else {
        console.error('"Could not find element with id "locationList"')
    }
}
renderLocationListToDOM(locationHTML)
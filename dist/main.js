import { fishList, mostHolyFish, soldierFish, regularFish } from "./fishList.js";
import { tipList } from "./tipList.js";
import { locationList } from "./locationList.js";
import { renderFishListToDOM, renderTipListToDOM, renderLocationListToDOM, } from "./renderHTML.js";
// //Generate and render the fish list
// const fishListHTML = fishList()
// renderFishListToDOM(fishListHTML)
// Generate and render the filtered fish list
const holyFishHTML = fishList(mostHolyFish());
const soldierFishHTML = fishList(soldierFish());
const regularFishHTML = fishList(regularFish());
renderFishListToDOM(holyFishHTML, soldierFishHTML, regularFishHTML);
// Generate and render the care tips
const tipHTML = tipList();
renderTipListToDOM(tipHTML);
// Generate and render the location list
const locationHTML = locationList();
renderLocationListToDOM(locationHTML);

export const renderFishListToDOM = (...fishHTML) => {
    const fishList = document.getElementById("fishList");
    if (fishList) {
        fishList.innerHTML = fishHTML.join("");
    }
    else {
        console.error('"Could not find element with id "fishList"');
    }
};
export const renderTipListToDOM = (tipHTML) => {
    const tipList = document.getElementById("tipList");
    if (tipList) {
        tipList.innerHTML = tipHTML;
    }
    else {
        console.error('"Could not find element with id "tipList"');
    }
};
export const renderLocationListToDOM = (locationHTML) => {
    const locationList = document.getElementById("locationList");
    if (locationList) {
        locationList.innerHTML = locationHTML;
    }
    else {
        console.error('"Could not find element with id "locationList"');
    }
};
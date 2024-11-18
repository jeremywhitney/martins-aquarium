export const renderFishListToDOM = (...fishHTML: string[]): void => {
  const fishList = document.getElementById("fishList");

  if (fishList) {
    fishList.innerHTML = fishHTML.join("");
  } else {
    console.error('"Could not find element with id "fishList"');
  }
};

export const renderTipListToDOM = (tipHTML: string): void => {
  const tipList = document.getElementById("tipList");

  if (tipList) {
    tipList.innerHTML = tipHTML;
  } else {
    console.error('"Could not find element with id "tipList"');
  }
};

export const renderLocationListToDOM = (locationHTML: string): void => {
  const locationList = document.getElementById("locationList");

  if (locationList) {
    locationList.innerHTML = locationHTML;
  } else {
    console.error('"Could not find element with id "locationList"');
  }
};

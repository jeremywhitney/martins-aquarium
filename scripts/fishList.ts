import { database } from "./fishData";
import { Fish } from "./types.js";

export const fishList = (fishArray: Fish[]): string => {
  let fishHTML = "";

  for (const fish of fishArray) {
    fishHTML += `
            <article class="fish">
                <img src="${fish.image}" alt="${fish.name} image" class="fish_image">
                <div class="fish_details">
                    <h2 class="fish_name">Name: ${fish.name}</h2>
                    <p class="fish_species">Species: ${fish.species}</p>
                    <p class="fish_length">Length: ${fish.length} inches</p>
                    <p class="fish_location">Location: ${fish.location}</p>
                    <p class="fish_diet">Diet: ${fish.diet}</p>
                </div>
            </article>
        `;
  }
  return fishHTML;
};

export const mostHolyFish = (): Fish[] => {
  const holyFish: Fish[] = [];

  for (const fish of database.fish) {
    if (fish.length % 3 === 0) {
      holyFish.push(fish);
    }
  }
  return holyFish;
};

export const soldierFish = (): Fish[] => {
  const soldierFish: Fish[] = [];

  for (const fish of database.fish) {
    if (fish.length % 5 === 0) {
      soldierFish.push(fish);
    }
  }
  return soldierFish;
};

export const regularFish = (): Fish[] => {
  const regularFish: Fish[] = [];

  for (const fish of database.fish) {
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
      regularFish.push(fish);
    }
  }
  return regularFish;
};

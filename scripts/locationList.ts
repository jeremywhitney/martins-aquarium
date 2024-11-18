import { database } from "./fishData";

export const locationList = (): string => {
  let locationHTML = "";

  for (const location of database.locations) {
    locationHTML += `
            <article class="locations">
                <section class="location details">
                    <h2 class="location_name">Name: ${location.name}</h2>
                    <p class="location_country">Country: ${location.country}</p>
                    <p class="location_description">Description: ${location.description}</p>
                </section>
            </article>
        `;
  }

  return locationHTML;
};

import { database } from "./fishData";

export const tipList = (): string => {
  let tipHTML = "";

  for (const tips of database.tips) {
    tipHTML += `
            <ul class="tips">
                <li class="tip_topic">${tips.topic}</li>
                <li class="tip_text">${tips.text}</li>
            </ul>
        `;
  }

  return tipHTML;
};

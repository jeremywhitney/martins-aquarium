import { Diet, Fish, Location, Tip } from "./types";

const fish: Fish[] = [
  {
    name: "Nemo",
    species: "Clownfish",
    length: 3,
    location: "Great Barrier Reef",
    diet: Diet.Omnivore,
    image: "./images/nemo.webp",
  },
  {
    name: "Dory",
    species: "Blue Tang",
    length: 5,
    location: "Great Barrier Reef",
    diet: Diet.Omnivore,
    image: "./images/dory.webp",
  },
  {
    name: "Gill",
    species: "Moorish Idol",
    length: 8,
    location: "Indian & Pacific Oceans",
    diet: Diet.Omnivore,
    image: "./images/gill.webp",
  },
  {
    name: "Bloat",
    species: "Porcupine pufferfish",
    length: 20,
    location: "Great Barrier Reef",
    diet: Diet.Omnivore,
    image: "./images/bloat.webp",
  },
  {
    name: "Sheldon",
    species: "Seahorse",
    length: 6,
    location: "Great Barrier Reef",
    diet: Diet.Crustaceans,
    image: "./images/sheldon.webp",
  },
  {
    name: "Bubbles",
    species: "Yellow Tang",
    length: 8,
    location: "Great Barrier Reef",
    diet: Diet.Omnivore,
    image: "./images/bubbles.webp",
  },
  {
    name: "Anchor",
    species: "Hammerhead Shark",
    length: 144,
    location: "Worldwide",
    diet: Diet.Carnivore,
    image: "./images/anchor.webp",
  },
  {
    name: "Marlin",
    species: "Striped Marlin",
    length: 120,
    location: "Pacific Ocean",
    diet: Diet.Carnivore,
    image: "./images/marlin.jpeg",
  },
  {
    name: "Dolphin",
    species: "Common Dolphin",
    length: 84,
    location: "Worldwide",
    diet: Diet.Carnivore,
    image: "./images/dolphin.jpeg",
  },
  {
    name: "Squirt",
    species: "Squid",
    length: 10,
    location: "Ocean",
    diet: Diet.Carnivore,
    image: "./images/squirt.jpeg",
  },
  {
    name: "Pearl",
    species: "Pearl Gourami",
    length: 4,
    location: "Southeast Asia",
    diet: Diet.Omnivore,
    image: "./images/pearl.webp",
  },
  {
    name: "Clowny",
    species: "Clown Triggerfish",
    length: 18,
    location: "Indian Ocean",
    diet: Diet.Carnivore,
    image: "./images/clowny.png",
  },
  {
    name: "Barracuda",
    species: "Great Barracuda",
    length: 72,
    location: "Tropical Seas",
    diet: Diet.Carnivore,
    image: "./images/barracuda.jpeg",
  },
  {
    name: "Jelly",
    species: "Jellyfish",
    length: 15,
    location: "Worldwide",
    diet: Diet.Carnivore,
    image: "./images/jelly.jpeg",
  },
  {
    name: "Guppy",
    species: "Millionfish",
    length: 2,
    location: "South America",
    diet: Diet.Omnivore,
    image: "./images/guppy.jpeg",
  },
  {
    name: "Esteban",
    species: "Jaguar Shark",
    length: 180,
    location: "Unknown",
    diet: Diet.Carnivore,
    image: "./images/esteban.webp",
  },
  {
    name: "Angelfish",
    species: "French Angelfish",
    length: 15,
    location: "Caribbean Sea",
    diet: Diet.Omnivore,
    image: "./images/angelfish.webp",
  },
];

const tips: Tip[] = [
  {
    topic: "Water Temperature",
    text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish.",
  },
  {
    topic: "Feeding Guidelines",
    text: "Feed omnivores four times a day and carnivores twice a day.",
  },
];

const locations: Location[] = [
  {
    name: "Great Barrier Reef",
    country: "Australia",
    description:
      "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life.",
  },
];

export const database = { fish, tips, locations };

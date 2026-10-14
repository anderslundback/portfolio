export interface Interest {
  id: string;
  emoji: string;
  title: string;
  blurb: string;
  link?: { href: string; label: string };
  // Add favourites here and they will show up on the page automatically.
  favourites?: string[];
}

export const interests: Interest[] = [
  {
    id: "chess",
    emoji: "♞",
    title: "Chess",
    blurb:
      "I've played competitively since childhood. Chess taught me to think a few moves ahead, stay calm when the position gets sharp, and accept that the best plan still needs adjusting once your opponent moves. It's also why I built a chess project of my own.",
    link: {
      href: "https://better-chess.com/",
      label: "Visit better-chess.com",
    },
  },
  {
    id: "disc-golf",
    emoji: "🥏",
    title: "Disc golf",
    blurb:
      "Fresh air, a bag of discs and a long walk with friends. Disc golf is the perfect mix of precision and chaos: one gust of wind and your perfect throw ends up in the trees.",
    favourites: [],
  },
  {
    id: "golden-retriever",
    emoji: "🐕",
    title: "My golden retriever",
    blurb:
      "The unofficial head of morale. Endlessly friendly, permanently hungry, and convinced every meeting is better with a ball. Walks with the dog are where many of my best product ideas show up.",
  },
  {
    id: "games",
    emoji: "🎮",
    title: "Games",
    blurb:
      "I love games that reward curiosity and clever systems. They're also a great source of product inspiration: onboarding, feedback loops and progression are all design problems games solved first.",
    favourites: [],
  },
  {
    id: "movies",
    emoji: "🎬",
    title: "Movies",
    blurb:
      "I’m a sucker for a well-told story, whether it's a big blockbuster or a quiet film that stays with you for days.",
    favourites: [],
  },
];

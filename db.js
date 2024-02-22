let games = [
  { id: "1", title: "Halo", platform: ["Xbox", "PC"] },
  { id: "2", title: "God of War", platform: ["Playstation"] },
  { id: "3", title: "Super Mario", platform: ["Nintendo"] },
  { id: "4", title: "Call of Duty", platform: ["Xbox", "Playstation", "PC"] },
  {
    id: "5",
    title: "Fortnite",
    platform: ["Xbox", "Playstation", "PC", "Mobile"],
  },
];

let authors = [
  { id: "1", name: "John Doe", verified: true },
  { id: "2", name: "Jane Doe", verified: false },
  { id: "3", name: "Jim Doe", verified: true },
  { id: "4", name: "Jill Doe", verified: false },
  { id: "5", name: "Jack Doe", verified: true },
];

let reviews = [
  { id: "1", rating: 5, content: "Great game!", author_id: "1", game_id: "1" },
  { id: "2", rating: 4, content: "Good game!", author_id: "2", game_id: "2" },
  { id: "3", rating: 3, content: "Decent game!", author_id: "3", game_id: "3" },
  { id: "4", rating: 2, content: "Bad game!", author_id: "4", game_id: "4" },
  {
    id: "5",
    rating: 1,
    content: "Terrible game!",
    author_id: "5",
    game_id: "5",
  },
  { id: "6", rating: 5, content: "Great game!", author_id: "1", game_id: "2" },
  { id: "7", rating: 4, content: "Good game!", author_id: "2", game_id: "3" },
  { id: "8", rating: 3, content: "Decent game!", author_id: "3", game_id: "4" },
];

export default { games, authors, reviews };

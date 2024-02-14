export const fetchPokemonData = async () => {
  try {
    const response = await fetch("https://poke-fight-njw1.onrender.com/pokemon");
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchSinglePokemonData = async (id) => {
  try {
    const response = await fetch(`https://poke-fight-njw1.onrender.com/pokemon/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
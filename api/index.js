export const fetchPokemonData = async () => {
  try {
    const response = await fetch("https://poke-fight-njw1.onrender.com/pokemon");
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
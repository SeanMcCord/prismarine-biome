module.exports = loader

let biomes

function loader(mcVersion) {
  biomes = require('minecraft-data')(mcVersion).biomes
  Object.keys(biomes).forEach((k) => {
    biomes[k] = {
      id: biomes[k].id,
      name: biomes[k].name,
      category: biomes[k].category,
      temperature: biomes[k].temperature,
      precipitation: biomes[k].precipitation,
      depth: biomes[k].depth,
      dimension: biomes[k].dimension,
      displayName: biomes[k].displayName,
      color: biomes[k].color,
      rainfall: biomes[k].rainfall,
      child: biomes[k].child || null,
      climates: biomes[k].climates || [],
      parent: biomes[k].parent || null,
    };
  });
  return Biome
}

const emptyBiome = {
  color: 0,
  height: null,
  name: '',
  rainfall: 0,
  temperature: 0
}

function Biome(id) {
  return biomes[id] || {...emptyBiome, id}
}

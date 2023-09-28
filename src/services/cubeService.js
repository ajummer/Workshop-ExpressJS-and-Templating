const cubes = [
  {
    id: "5c39f1851ab3b24f5c03e182",
    name: "Gan356 Air SM",
    description: "Nice cube Bro",
    imageUrl:
      "https://ae01.alicdn.com/kf/HTB1CSddXRxRMKJjy0Fdq6yifFXa6/Gan-356-Air-SM-3x3-Black-Magic-cube-GAN-Air-SM-Magnetic-3x3x3-Speed-cube-gans.jpg",
    difficultyLevel: 3,
  },
];
const uniqid = require("uniqid");

exports.createCube = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);
  return newCube;
};

exports.getAllCubes = () => {
  return [...cubes];
};

exports.getSingleCube = (id) => {
  const cube = cubes.find((cube) => cube.id === id);
  return cube;
};

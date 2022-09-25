fetch("https://burgers1.p.rapidapi.com/burgers", {
  headers: {
    "X-RapidAPI-Key": "d0f86aa49cmsh7ba689fd3ef8cc4p168897jsnf4a1fc6547d6",
    "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
  },
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) => {
    console.log(error);
  });

const search = (event, objectData, setReturnedData) => {
  event.preventDefault();

  const input = event.target.value.toLowerCase();

  const result = objectData.filter((data) => {
    return Object.keys(data).some((key) => {
      return JSON.stringify(data[key].toLowerCase().trim().includes(input));
    });
  });

  setReturnedData(result);
};

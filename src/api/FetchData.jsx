import axios from "axios";

const getData = async () => {
  const data = await axios.get(
    "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
  );
  const quote = data.data.quotes[0];
  return quote;
};

export default getData;

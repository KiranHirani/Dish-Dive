import { useEffect, useState } from "react";

const useAboutDetails = () => {
  const [developer, setDeveloper] = useState(null);
  const url = ``;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setDeveloper(json);
  }

  return developer;
};

export default useAboutDetails;

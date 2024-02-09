import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useState } from "react";

const AppLayout = () => {
  const [searchValue, setSearchValue] = useState("");

  const setSearch = (value) => setSearchValue(value);

  return (
    <div className="app">
      {/* Header */}
      <Header searchText={setSearch} />
      {/* Body */}
      <Body className=".body" searchValue={searchValue} />
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default AppLayout;

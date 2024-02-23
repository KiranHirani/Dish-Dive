import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useState } from "react";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import OnlineStatus from "./OnlineStatus";

const AppLayout = () => {
  const [searchValue, setSearchValue] = useState("");

  const setSearch = (value) => setSearchValue(value);
  const onlineStatus = useOnlineStatus();

  return onlineStatus === false ? (
    <OnlineStatus />
  ) : (
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

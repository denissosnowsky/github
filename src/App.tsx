import { ChangeEvent, useState } from "react";

import { Display } from "./components/Display";
import { Loading } from "./components/Loading";
import { fetchUser } from "./utils";
import { GITHUB_RES } from "./types";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<GITHUB_RES | null>(null);

  const onSearch = async () => {
    if (inputValue.trim()) {
      setIsLoading(true);

      try {
        const res = await fetchUser(inputValue);
        setUserData(res);
      } catch {
        setUserData(null);
      }

      setIsLoading(false);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  return (
    <div className="h-screen w-screen flex flex-col container p-10">
      <div className="h-28 flex flex-col justify-center items-center gap-10">
        <input
          value={inputValue}
          onChange={onInputChange}
          className="w-72 border-b-[1px] border-amber-800"
        />
        <button className="bg-orange-300 p-3 rounded-2xl" onClick={onSearch}>
          Search
        </button>
      </div>
      <div className="p-10 flex justify-center items-center h-full">
        {isLoading ? <Loading /> : <Display userData={userData} />}
      </div>
    </div>
  );
}

export default App;

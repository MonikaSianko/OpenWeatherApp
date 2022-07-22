import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import WheatherDisplay from "./components/WheatherDisplay/WheatherDisplay";

export interface ICityDetails {
  name: string;
  countryCode: string;
}

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isAppLoading ? (
        <div className="app-loader-wrapper">
          <Oval
            ariaLabel="loading-indicator"
            height={300}
            width={300}
            strokeWidth={2}
            strokeWidthSecondary={1}
            color="#2E9ED4"
            secondaryColor="white"
          />
        </div>
      ) : (
        <WheatherDisplay />
      )}
    </>
  );
};

export default App;

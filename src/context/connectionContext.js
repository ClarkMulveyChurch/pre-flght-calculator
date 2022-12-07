import React, { useState, useEffect, useContext, createContext } from "react";

export const OnlineStatusContext = createContext();

export const OnlineStatusProvider = ({ children }) => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  console.log("onlineStatus", onlineStatus);

  const UseOnlineStatus = () => {
    const store = useContext(OnlineStatusContext);
    return store;
  };

  async function getOnlineStatus() {
    console.log("onlineStatus", onlineStatus);
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      console.log("OFFLINE");
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
      console.log("ONLINE");

    });

    // return () => {
    //   window.removeEventListener("offline", () => {
    //     setOnlineStatus(false);
    //   });
    //   window.removeEventListener("online", () => {
    //     setOnlineStatus(true);
    //   });
    // };
    return false;
  }

  useEffect(() => {
    console.log("onlineUseEffect");
    getOnlineStatus();
  }, []);

  return (
    <OnlineStatusContext.Provider
      value={[
        onlineStatus,
        {
          getOnlineStatus: getOnlineStatus,
        }, // These are actions
      ]}
    >
      {children}
    </OnlineStatusContext.Provider>
  );
};

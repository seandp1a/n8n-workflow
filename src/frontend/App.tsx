import { AccountTree, Fingerprint } from "@mui/icons-material";
import { Navigation } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import "./App.css";
import { TokenField } from "./enum/token.enum";
import { setToken } from "./state/token/tokenSlice";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Tokens",
    icon: <Fingerprint />,
  },
  {
    segment: "workflow",
    title: "Workflow",
    icon: <AccountTree />,
  },
  {
    segment: "test",
    title: "Test",
    icon: <AccountTree />,
  },
];

const BRANDING = {
  title: "My Toolpad Core App 2",
};
function App() {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const oldSetting = localStorage.getItem("oldSetting");

    if (oldSetting) {
      console.log("oldSetting", oldSetting);
      const parsedSetting: Record<TokenField, string> = JSON.parse(oldSetting);
      for (const key in parsedSetting) {
        const field = key as TokenField;
        dispatch(
          setToken({
            field: field,
            value: parsedSetting[field],
          })
        );
      }
    }
    setIsReady(true);
  }, []);
  return (
    <>
      {isReady && (
        <ReactRouterAppProvider
          navigation={NAVIGATION}
          branding={BRANDING}
        >
          <Outlet />
        </ReactRouterAppProvider>
      )}
    </>
  );
}

export default App;

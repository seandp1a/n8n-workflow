import { AccountTree, Fingerprint } from '@mui/icons-material';
import { Navigation } from "@toolpad/core/AppProvider";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";
import { Outlet } from "react-router";
import "./App.css";

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
];

const BRANDING = {
  title: "My Toolpad Core App 2",
};
function App() {
  return (
    <>
      <ReactRouterAppProvider
        navigation={NAVIGATION}
        branding={BRANDING}
      >
        <Outlet />
      </ReactRouterAppProvider>
    </>
  );
}

export default App;

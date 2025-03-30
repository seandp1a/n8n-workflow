import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from "@mui/icons-material/Dashboard";
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
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "user",
    title: "User",
    icon: <AccountCircleIcon />,
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

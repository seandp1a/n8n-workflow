import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

export default function Home() {
  const [count, setCount] = useState(0);
  const [nodeVersion, setNodeVersion] = useState<string | undefined>(undefined);
  const updateNodeVersion = useCallback(
    async () =>
      setNodeVersion(await backend.nodeVersion("Hello from App.tsx!")),
    []
  );
  return (
    <Typography
      variant="h6"
      color="grey.800"
    >
      This is page Home!
      <div>
        <a
          href="https://vite.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
        >
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
      <button onClick={updateNodeVersion}>Node version is {nodeVersion}</button>
      <div>Vite + React</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Typography>
  );
}

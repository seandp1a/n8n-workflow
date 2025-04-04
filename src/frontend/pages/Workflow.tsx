import { PlayArrow } from "@mui/icons-material";
import { Box, Button, Skeleton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
enum Status {
  Waiting = "Waiting",
  Success = "Success",
  Error = "Error",
}

export default function WorkflowPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [hooksResponse, setHooksResponse] = useState<{
    [key: string]: Status;
  }>({
    hook1: Status.Waiting,
  });
  const statusColor = {
    Waiting: "grey",
    Success: "success",
    Error: "error",
  };
  useEffect(() => {
    const getWorkflows = async () => {
      const response = await fetch("http://localhost:5678/rest/workflows", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        
      });
      const data = await response.json();
      console.log(data);
    };

    // getWorkflows();
  }, []);
  console.log(isLoading);
  async function handleClick() {
    setIsLoading(true);
    const response = await fetch("http://localhost:5678/webhook-test/hook1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: "test",
      }),
    });
    const data = await response.json();
    setIsLoading(false);
    setHooksResponse({
      ...hooksResponse,
      hook1: data.code === "0000" ? Status.Success : Status.Error,
    });
  }

  return (
    <Typography
      color="grey.800"
      component="div"
      variant="body1"
    >
      <Stack spacing={2}>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          onClick={() => handleClick()}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <span>Webhook 1</span>
            <Box
              sx={{
                textAlign: "left",
                width: "100%",
                height: "24px",
              }}
            >
              {isLoading && <Skeleton />}
              {!isLoading && (
                <Typography
                  variant="body2"
                  component="span"
                  color={statusColor[hooksResponse.hook1]}
                >
                  - {hooksResponse.hook1}
                </Typography>
              )}
            </Box>
          </Box>
          <PlayArrow
            sx={{
              fontSize: "2rem",
              display: isLoading ? "none" : "block",
            }}
          />
        </Button>
      </Stack>
    </Typography>
  );
}

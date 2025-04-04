import { Button, FormControl, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const fields = [
  { label: "Jira Token", value: "" },
  { label: "Conflunce Token", value: "" },
  { label: "Git Lab Token", value: "" },
];

export default function Home() {
  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({
    "Jira Token": "",
    "Confluence Token": "",
    "Git Lab Token": "",
  });

  const handleInputChange = (label: string, value: string) => {
    setFieldValues({ ...fieldValues, [label]: value });
  };

  useEffect(() => {
    const oldSetting = localStorage.getItem("oldSetting");

    if (oldSetting) {
      const parsedSetting = JSON.parse(oldSetting);
      setFieldValues((prevValues) => ({
        ...prevValues,
        ...parsedSetting,
      }));
    }
  }, []);

  function handleSave() {
    const newSetting = JSON.stringify(fieldValues);
    localStorage.setItem("oldSetting", newSetting);
  }

  return (
    <Typography color="grey.800" component="div" variant="body1">
      <form
        noValidate
        autoComplete="off"
      >
        {fields.map((field) => (
          <FormControl
            key={field.label}
            sx={{ width: "100%", marginBottom: "1rem" }}
          >
            <TextField
              id={`filled-basic-${field.label.toLowerCase().replace(/\s/g, "-")}`}
              label={field.label}
              variant="outlined"
              value={fieldValues[field.label]}
              onChange={(e) => handleInputChange(field.label, e.target.value)}
            />
          </FormControl>
        ))}
      </form>
      <Button
        variant="outlined"
        onClick={() => handleSave()}
      >
        Save
      </Button>
    </Typography>
  );
}

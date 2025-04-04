import { Button, FormControl, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { TokenField } from "../enum/token.enum";

const fields = [
  { id: TokenField.N8N, label: "n8n Token", value: "" },
  { id: TokenField.JIRA, label: "Jira Token", value: "" },
  { id: TokenField.CONFLUENCE, label: "Conflunce Token", value: "" },
  { id: TokenField.GITLAB, label: "Git Lab Token", value: "" },
];

export default function Home() {
  const [fieldValues, setFieldValues] = useState<Record<TokenField, string>>({
    [TokenField.N8N]: "",
    [TokenField.JIRA]: "",
    [TokenField.CONFLUENCE]: "",
    [TokenField.GITLAB]: "",
  });

  const handleInputChange = (id: string, value: string) => {
    setFieldValues({ ...fieldValues, [id]: value });
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
    <Typography
      color="grey.800"
      component="div"
      variant="body1"
    >
      <form
        noValidate
        autoComplete="off"
      >
        {fields.map((field) => (
          <FormControl
            key={field.id}
            sx={{ width: "100%", marginBottom: "1rem" }}
          >
            <TextField
              id={`filled-basic-${field.id.toLowerCase().replace(/\s/g, "-")}`}
              label={field.label}
              variant="outlined"
              value={fieldValues[field.id]}
              onChange={(e) => handleInputChange(field.id, e.target.value)}
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

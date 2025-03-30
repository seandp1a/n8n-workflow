import { FormControl, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const fields = [
  { label: "Jira Token", value: '' },
  { label: "Conflunce Token", value: '' },
  { label: "Git Lab Token", value: '' },
]

export default function Home() {
  const [fieldValues, setFieldValues] = useState<{ [key: string]: string }>({
    'Jira Token': '',
    'Confluence Token': '',
    'Git Lab Token': '',
  });

  const handleInputChange = (label: string, value: string) => {
    setFieldValues({ ...fieldValues, [label]: value });
  };

  return (
    <Typography color="grey.800">
      <form
        noValidate
        autoComplete="off"
      >
        {fields.map((field) => (
          <FormControl key={field.label} sx={{ width: "100%", marginBottom: '1rem' }}>
            <TextField
              id={`filled-basic-${field.label.toLowerCase().replace(/\s/g, '-')}`}
              label={field.label}
              variant="outlined"
              value={fieldValues[field.label]}
              onChange={(e) => handleInputChange(field.label, e.target.value)}
            />
          </FormControl>
        ))}
      </form>
    </Typography>
  );
}

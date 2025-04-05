import { Button, FormControl, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TokenField } from "../enum/token.enum";
import { RootState } from "../state/store";
import { setToken } from "../state/token/tokenSlice";

const fields = [
  { id: TokenField.N8N, label: "n8n Token", value: "" },
  { id: TokenField.JIRA, label: "Jira Token", value: "" },
  { id: TokenField.CONFLUENCE, label: "Conflunce Token", value: "" },
  { id: TokenField.GITLAB, label: "Git Lab Token", value: "" },
];

export default function Home() {
  const dispatch = useDispatch();
  const tokens = useSelector((state: RootState) => state.token);
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
    if (tokens) {
      setFieldValues((prevValues) => ({
        ...prevValues,
        ...tokens,
      }));
    }
  }, []);

  function handleSave() {
    localStorage.setItem("oldSetting", JSON.stringify(fieldValues));
    for (const field of fields) {
      dispatch(
        setToken({
          field: field.id,
          value: fieldValues[field.id],
        })
      );
    }
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

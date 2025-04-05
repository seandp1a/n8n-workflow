import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenField } from "../../enum/token.enum";

interface TokenState {
  [TokenField.N8N]: string;
  [TokenField.JIRA]: string;
  [TokenField.CONFLUENCE]: string;
  [TokenField.GITLAB]: string;
}
const initialState: TokenState = {
  [TokenField.N8N]: "",
  [TokenField.JIRA]: "",
  [TokenField.CONFLUENCE]: "",
  [TokenField.GITLAB]: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{
        field: TokenField;
        value: string;
      }>
    ) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetToken: (state) => {
      state[TokenField.N8N] = "";
      state[TokenField.JIRA] = "";
      state[TokenField.CONFLUENCE] = "";
      state[TokenField.GITLAB] = "";
    },
  },
});
export const { setToken, resetToken } = tokenSlice.actions;

export default tokenSlice.reducer;

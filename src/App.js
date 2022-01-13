import "./App.css";
import { useState } from "react";
import { Button, TextField, Box, Grid, styled, Paper } from "@mui/material";

function App() {
  const [plainText, setplainText] = useState("");
  const [cipherText, setcipherText] = useState("");

  /**
   * It converts plain text to cipher text
   */
  function plainToCipher() {
    let str = plainText;
    let result = [...str]
      .map((ch) =>
        ch == ch.toUpperCase()
          ? String.fromCharCode(
              "Z".charCodeAt(0) - ch.charCodeAt(0) + "A".charCodeAt(0) // if it is uppercase then substract from 'Z'
            )
          : String.fromCharCode(
              "z".charCodeAt(0) - ch.charCodeAt(0) + "a".charCodeAt(0) // if it is uppercase then substract from 'z'
            )
      )
      .join("");
    setcipherText(result);
  }

  /**
   * It converts cipher text to plain text
   */
  function cipherToPlain() {
    let str = cipherText;
    let result = [...str]
      .map((ch) =>
        ch == ch.toUpperCase()
          ? String.fromCharCode(
              "A".charCodeAt(0) + "Z".charCodeAt(0) - ch.charCodeAt(0)
            )
          : String.fromCharCode(
              "a".charCodeAt(0) + "z".charCodeAt(0) - ch.charCodeAt(0)
            )
      )
      .join("");
    setplainText(result);
  }

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          marginTop: "30px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth={true}
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
              required
              multiline
              rows={5}
              maxRows={15}
              label="Plain Text"
              onChange={(e) => setplainText(e.target.value)}
              color="secondary"
              value={plainText}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth={true}
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
              required
              rows={5}
              multiline
              maxRows={15}
              label="Ciphered Text"
              onChange={(e) => setcipherText(e.target.value)}
              color="secondary"
              value={cipherText}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth={true}
              variant="contained"
              color="success"
              onClick={() => {
                plainToCipher();
              }}
            >
              Cipher
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth={true}
              variant="contained"
              color="primary"
              onClick={() => {
                cipherToPlain();
              }}
            >
              Dicipher
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;

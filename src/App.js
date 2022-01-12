import "./App.css";
import { useState } from "react";
import { Button, TextField, Box, Grid, styled, Paper } from "@mui/material";

function App() {
  const [cipherCode, setCipherCode] = useState("");
  const [diCipherCode, setDiCipherCode] = useState("");

  function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
  }

  function cipherToDicipher() {
    let str = cipherCode;
    let result = [...str]
      .map((ch) =>
        ch == ch.toUpperCase() && isCharacterALetter(ch)
          ? String.fromCharCode(
              "Z".charCodeAt(0) - ch.charCodeAt(0) + "A".charCodeAt(0)
            )
          : ch == ch.toLowerCase() && isCharacterALetter(ch)
          ? String.fromCharCode(
              "z".charCodeAt(0) - ch.charCodeAt(0) + "a".charCodeAt(0)
            )
          : ch
      )
      .join("");
    setDiCipherCode(result);
  }

  function diCipherTocipher() {
    let str = diCipherCode;
    let result = [...str]
      .map((ch) =>
        ch == ch.toUpperCase() && isCharacterALetter(ch)
          ? String.fromCharCode(
              "A".charCodeAt(0) + "Z".charCodeAt(0) - ch.charCodeAt(0)
            )
          : ch == ch.toLowerCase() && isCharacterALetter(ch)
          ? String.fromCharCode(
              "a".charCodeAt(0) + "z".charCodeAt(0) - ch.charCodeAt(0)
            )
          : ch
      )
      .join("");
    setCipherCode(result);
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
              onChange={(e) => setCipherCode(e.target.value)}
              color="secondary"
              value={cipherCode}
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
              onChange={(e) => setDiCipherCode(e.target.value)}
              color="secondary"
              value={diCipherCode}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth={true}
              variant="contained"
              color="success"
              onClick={() => {
                cipherToDicipher();
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
                diCipherTocipher();
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

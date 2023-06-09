//* Context React
import { useEffect } from "react";

//* React
import { useFormulario } from "@/contexts/FormContext";

//*Data
import { directionSense, letters, street } from "@/data";

//*Material Ui
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export const Direction = () => {
  const { data, direction, setDirection, errorsDir, handleChangeInput } =
    useFormulario();

  const {
    viaPrincipal,
    numeroPrincipal,
    letraPrincipal,
    direccionPrincipal,
    numeroSecundario,
    letraSecundaria,
    direccionSecundaria,
    placa,
    complemento,
  } = direction;

  let directions =
    viaPrincipal +
    " " +
    numeroPrincipal +
    letraPrincipal +
    " " +
    direccionPrincipal +
    " " +
    numeroSecundario +
    letraSecundaria +
    " " +
    direccionSecundaria +
    "-" +
    " " +
    placa +
    " " +
    complemento;

  data.direccion = directions;

  const handleChangeDirection = (e: any) => {
    const { name, value } = e.target;
    setDirection({
      ...direction,
      [name]: value,
    });
  };

  return (
    <Grid container direction="row" spacing={2} my={2} mx={0.5}>
      <Grid item xs={6} sm={3} md={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Via Principal</InputLabel>
          <Select
            error={Boolean(errorsDir.viaPrincipal)}
            name="viaPrincipal"
            value={viaPrincipal}
            label="Via Principal"
            onChange={handleChangeDirection}
          >
            <MenuItem value={""}>Seleccionar...</MenuItem>
            {street.map((item) => (
              <MenuItem key={item.id} value={item.description}>
                {item.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {errorsDir.viaPrincipal && (
          <div style={{ color: "red" }}>{errorsDir.viaPrincipal}</div>
        )}
      </Grid>
      <Grid item xs={4} sm={3} md={2}>
        <TextField
          error={Boolean(errorsDir.numeroPrincipal)}
          label="Numero"
          type="number"
          name="numeroPrincipal"
          value={numeroPrincipal}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
        {errorsDir.numeroPrincipal && (
          <div style={{ color: "red" }}>{errorsDir.numeroPrincipal}</div>
        )}
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Letra</InputLabel>
          <Select
            name="letraPrincipal"
            value={letraPrincipal}
            label="Letra"
            onChange={handleChangeDirection}
          >
            <MenuItem value={""}>Seleccionar...</MenuItem>
            {letters.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4} sm={3} md={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Sentido:</InputLabel>
          <Select
            name="direccionPrincipal"
            value={direccionPrincipal}
            label="Sentido"
            onChange={handleChangeDirection}
          >
            <MenuItem value={""}>Seleccionar...</MenuItem>
            {directionSense.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4} sm={3} md={2}>
        <TextField
          error={Boolean(errorsDir.numeroSecundario)}
          label="Numero"
          type="number"
          name="numeroSecundario"
          value={numeroSecundario}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
        {errorsDir.numeroSecundario && (
          <div style={{ color: "red" }}>{errorsDir.numeroSecundario}</div>
        )}
      </Grid>
      <Grid item xs={4} sm={2} md={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Letra</InputLabel>
          <Select
            name="letraSecundaria"
            value={letraSecundaria}
            label="Letra"
            onChange={handleChangeDirection}
          >
            <MenuItem value={""}>Seleccionar...</MenuItem>
            {letters.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4} sm={3} md={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Sentido:</InputLabel>
          <Select
            name="direccionSecundaria"
            value={direccionSecundaria}
            label="Sentido"
            onChange={handleChangeDirection}
          >
            <MenuItem value={""}>Seleccionar...</MenuItem>
            {directionSense.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4} sm={3} md={2}>
        <TextField
          error={Boolean(errorsDir.placa)}
          label="placa"
          type="number"
          name="placa"
          value={placa}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
        {errorsDir.placa && (
          <div style={{ color: "red" }}>{errorsDir.placa}</div>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={false}
          label="complemento"
          type="text"
          name="complemento"
          value={complemento}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={false}
          type="text"
          label="Dirección Completa"
          name="directions"
          value={directions}
          onChange={handleChangeInput}
          fullWidth
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

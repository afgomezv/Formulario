//* Context React
import { useFormulario } from "@/contexts/FormContext";
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
  const { data, direction, setDirection, handleChange } = useFormulario();
  const { direccion } = data;
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

  const handleChangeDirection = (e: any) => {
    const { name, value } = e.target;
    setDirection({
      ...direction,
      [name]: value,
    });
  };

  return (
    <Grid container direction="row" spacing={2} my={2} mx={0.5}>
      <Grid item xs={6} sm={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel>Via Principal</InputLabel>
          <Select
            //error={Boolean(errors.streetFirst)}
            name="via principal"
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
        {/* {errors.streetFirst && (
          <div style={{ color: "red" }}>{errors.streetFirst}</div>
        )} */}
      </Grid>
      <Grid item xs={6} sm={1.5}>
        <TextField
          //error={Boolean(errors.numberFirst)}
          label="Numero"
          type="number"
          name="numberFirst"
          value={numeroPrincipal}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
        {/* {errors.numberFirst && (
          <div style={{ color: "red" }}>{errors.numberFirst}</div>
        )} */}
      </Grid>
      <Grid item xs={3} sm={1}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Letra</InputLabel>
          <Select
            name="letterFirst"
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
      <Grid item xs={3} sm={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Sentido:</InputLabel>
          <Select
            name="directionFirst"
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
      <Grid item xs={6} sm={1.5}>
        <TextField
          //error={Boolean(errors.numberSecond)}
          label="Numero"
          type="number"
          name="numberSecond"
          value={numeroSecundario}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
        {/* {errors.numberSecond && (
          <div style={{ color: "red" }}>{errors.numberSecond}</div>
        )} */}
      </Grid>
      <Grid item xs={3} sm={1}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Letra</InputLabel>
          <Select
            name="letterSecond"
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
      <Grid item xs={3} sm={2}>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="solicitud-label">Sentido:</InputLabel>
          <Select
            name="directionSecond"
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
      <Grid item xs={6} sm={1}>
        <TextField
          //error={Boolean(errors.placa)}
          label="placa"
          type="number"
          name="placa"
          value={placa}
          onChange={handleChangeDirection}
          fullWidth
          variant="outlined"
        />
        {/* {errors.placa && <div style={{ color: "red" }}>{errors.placa}</div>} */}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          error={false}
          label="complemento"
          type="text"
          name="complement"
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
          name="direccion"
          value={direccion}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

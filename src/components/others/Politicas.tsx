import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";

export const Politicas = () => {
  const router = useRouter();
  const openPopup = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    window.open(
      "http://localhost:3000/framerPage",
      "popupWindow",
      `width=${width},height=${height},scrollbars=yes`
    );
  };

  const getDirection = () => {
    router.push("/framerPage");
  };

  return (
    <Container>
      <Box my={2}>
        <Typography
          variant="h3"
          my={1.5}
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            color: "#00821d",
          }}
        >
          ventanilla única de atención al ciudadano
        </Typography>
        <Typography style={{ textAlign: "justify" }}>
          Te invitamos a consultar las Preguntas Frecuentes en el siguiente
          link:{" "}
          <a href="https://www.inder.gov.co/atencion-al-ciudadano/preguntas-frecuentes">
            Preguntas Frecuentes
          </a>{" "}
          antes de compartirnos tu inquietud, allí puedes encontrar la respuesta
          a tu requerimiento. El Instituto de Deportes y recreación de Medellin
          INDER pone a disposición de la ciudadanía, su sistema de PQRSD
          (Peticiones, Quejas, Reclamos, Sugerencias y Denuncias de hechos de
          corrupción), en cumplimiento de Ley de transparencia y acceso a la
          información (1712 de 2014) y del Estatuto anticorrupción (Ley 1474 de
          2011). Si su solicitud requiere expedición de copias, los costos
          corren por cuenta del interesado en obtenerlas conforme al articulo 29
          de la ley 1437 del 2011. Ver ley en el siguiente link:{" "}
          <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249">
            Ley 1437 del 2011.
          </a>
        </Typography>
      </Box>
      <Grid display="flex" justifyContent="center" my={2}>
        <Button
          variant="contained"
          size="large"
          onClick={getDirection}
          style={{ backgroundColor: "#00821d" }}
        >
          politicas de tratamiento de datos personales
        </Button>
      </Grid>
    </Container>
  );
};

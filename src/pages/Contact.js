import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import theme from "theme";
import PageContainer from "components/PageContainer";

const Contact = () => {
  return (
    <PageContainer>
      <Box
        sx={{
          height: "inherit",
          paddingTop: { xs: "156px", md: "158.5px" },
        }}
      >
        <Box component={"form"} method="POST" action="">
          <Grid container alignItems="flex-start">
            <Grid item xs={12} sx={{ marginBottom: "25px" }}>
              <Typography
                variant="h3"
                gutterBottom
                align="left"
                sx={{
                  paddingLeft: "25px",
                  paddingBottom: "5px",
                  borderBottom: "2px solid",
                  borderBottomColor: theme.palette.ternary.main,
                }}
              >
                Contacto
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} wrap="wrap">
              <Grid
                container
                direction="column"
                alignItems="flex-start"
                sx={{ width: { xs: "80%", md: "330px" } }}
              >
                <TextField
                  label="Apellido"
                  required
                  sx={{ marginBottom: "20px" }}
                />
                <TextField
                  label="Nombre"
                  required
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  label="E-Mail"
                  required
                  sx={{
                    marginBottom: "20px",
                  }}
                />
                <TextField
                  label="Teléfono"
                  sx={{
                    marginBottom: "20px",
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: { xs: "80%", md: "330px" } }}>
                <TextField label="Comentario" required multiline minRows={6} />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              alignContent="flex-start"
              sx={{ marginTop: { xs: "20px", md: "unset" } }}
            >
              <Button>Enviar</Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default Contact;

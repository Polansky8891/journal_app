import { Typography, Grid } from "@mui/material"


export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid
      
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "120vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        className="box-shadow"
        sx={{
          width: { sm: 450 }, // Aumentamos el ancho para permitir más espacio
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};


import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography, Box } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <form>
        <Grid container direction="column" spacing={3}>
          {/* Email */}
          <Grid item>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="correo@google.com"
              type="email"
              variant="outlined"
            />
          </Grid>

          {/* Password */}
          <Grid item>
            <TextField
              fullWidth
              id="password"
              label="Password"
              name="password"
              placeholder="password"
              type="password"
              variant="outlined"
            />
          </Grid>

          {/* Botones */}
          <Grid item>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  flex: 1,
                  height: 56,
                  textTransform: "none",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Login
              </Button>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  flex: 1,
                  height: 56,
                  textTransform: "none",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Google fontSize="small" />
                Google
              </Button>
            </Box>

            <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                  Crear una cuenta
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}


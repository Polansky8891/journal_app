import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography, Box } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch } from "react-redux"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'pol@google.com',
    password: '123456'
  });

  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {

    dispatch( startGoogleSignIn() );

  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onSubmit }>
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
              onChange={ onInputChange }
              value={ email }
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
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          {/* Botones */}
          <Grid item>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                type="submit"
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
                onClick={ onGoogleSignIn }
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


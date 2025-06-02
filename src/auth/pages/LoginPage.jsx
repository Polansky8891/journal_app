import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography, Box, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { startGoogleSignIn } from "../../store/auth/thunks"
import { useMemo } from "react"
import { startLoginWithEmailPassword } from "../../store/auth/thunks"

const formData = {
  email: '',
  password: ''
}
export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth );

  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm(formData);

  const isAuthenticating = useMemo( () => status === 'checking', [status]);



  const onSubmit = ( event ) => {
    event.preventDefault();

    dispatch( startLoginWithEmailPassword({ email, password }) );
  }

  const onGoogleSignIn = () => {

    dispatch( startGoogleSignIn() );

  }

  return (
    <AuthLayout title="Login">
      <form aria-label="submit-form" onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
        <Grid container direction="column" spacing={3}>
          {/* Email */}
          <Grid item>
            <TextField
              fullWidth
              id="email"
              label="Correo"
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
              inputProps={{
                'data-testid': 'password'
              }}
              placeholder="password"
              type="password"
              variant="outlined"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>

          {/* Botones */}
           <Grid item
                  display={ !!errorMessage ? '': 'none'}
                          
           >
               <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                    <Alert severity="error" sx={{ flex: 1 }}>
                            { errorMessage }
                    </Alert>
                </Box>
          
            </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                disabled={ isAuthenticating }
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
                disabled={ isAuthenticating }
                onClick={ onGoogleSignIn }
                variant="contained"
                aria-label="google-btn"
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


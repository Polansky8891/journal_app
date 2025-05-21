
import { Button, Grid, Link, TextField, Typography, Box } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"


const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @.'],
  password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >=1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {


  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { 
    formState,displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  
  } = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setformSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );

  }
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={ onSubmit }>
        <Grid container direction="column" spacing={3}>
          {/* Email */}
          <Grid item>
            <TextField
              fullWidth
              id="nombre"
              label="Nombre completo"
              placeholder="nombre completo"
              type="text"
              variant="outlined"
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted}
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item>
            <TextField
              fullWidth
              id="email"
              label="Email"
              name="email"
              placeholder="correo@google.com"
              type="email"
              variant="outlined"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted}
              helperText={ emailValid }
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
              error={ !!passwordValid && formSubmitted}
              helperText={ passwordValid }
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
                Crear cuenta
              </Button>

             
            </Box>

            <Grid container direction="row" justifyContent="end" sx={{ mt: 1 }}>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
                  Ingresar
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}


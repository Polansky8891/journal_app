import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid container direction="column" spacing={2}>

      
      <Grid item>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontSize={39} fontWeight="light">
            28 de agosto, 2023
          </Typography>

          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
      </Grid>

      
      <Grid item>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};

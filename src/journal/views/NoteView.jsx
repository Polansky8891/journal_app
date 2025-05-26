import { Grid, Typography, Button, TextField } from '@mui/material';
import { SaveOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/ImageGallery';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startSaveNote } from '../../store/auth/thunks';



export const NoteView = () => {

  const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

    const { body, title, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [date])

  useEffect(() => {
      dispatch( setActiveNote(formState) );

  }, [formState])

  const onSaveNote = () =>{
      dispatch( startSaveNote);
  }




  return (
    <Grid container direction="column" spacing={2}>

      
      <Grid item>
        <Grid 
            className='animate__animated animate__fadeIn animate__faster'
            container 
            direction="row" 
            justifyContent="space-between" 
            alignItems="center">
          <Typography fontSize={39} fontWeight="light">
            { dateString }
          </Typography>

          <Button 
              onClick={ onSaveNote }
              color="primary" 
              sx={{ padding: 2 }}>
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
          name="title"
          value={ title }
          onChange={ onInputChange }
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};

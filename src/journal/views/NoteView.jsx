import { Grid, Typography, Button, TextField, IconButton, Box } from '@mui/material';
import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { ImageGallery } from '../components/ImageGallery';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote } from '../../store/journal/journalSlice';
import { startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal/thunks';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';




export const NoteView = () => {

  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    dispatch( startUploadingFiles( target.files ) );
  };

  const onDelete = () => {
    dispatch( startDeletingNote() );
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid
          className='animate__animated animate__fadeIn animate__faster'
          container 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>

          <Box display="flex" alignItems="center" gap={1}>
            <IconButton 
              color='primary'
              disabled={isSaving}
              onClick={ () => fileInputRef.current.click() }
            >
              <UploadOutlined />
              <input 
                type="file" 
                style={{ display: 'none'}}
                multiple
                ref={ fileInputRef } 
                onChange={onFileInputChange} 
              />
            </IconButton>

            <Button 
              disabled={isSaving} 
              onClick={onSaveNote}
              color="primary" 
              sx={{ padding: 2 }}
            >
              <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
              Guardar
            </Button>
          </Box>
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
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent='end'>
        <Button
          onClick={ onDelete }
          sx={{ mt: 2}}
          color='error'
        
        >
          <DeleteOutline />
          Borrar
        </Button>
        
      </Grid>

      <ImageGallery images={ note.imageUrls } />
    </Grid>
  );
};
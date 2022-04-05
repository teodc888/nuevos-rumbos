import {
    createStyles,
    LinearProgress,
    Typography,
    withStyles
  } from '@material-ui/core';
  import React from 'react';
  // import { FileError } from 'react-dropzone';
  import { FileHeader } from './FileHeader';
  
  // estilos error
  const ErrorLinearProgress = withStyles((theme) =>
    createStyles({
      bar: {
        backgroundColor: theme.palette.error.main,
      },
    })
  )(LinearProgress);
  
  export function UploadError({ file, onDelete, errors }) {
    return (
      <React.Fragment>
        <FileHeader file={file} onDelete={onDelete} />
        <ErrorLinearProgress variant="determinate" value={100} />
        {errors.map((error) => (
          <div key={error.code}>
            <Typography >{error.message}</Typography>
          </div>
        ))}
      </React.Fragment>
    );
  }
import React from "react";
import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import TextField from "@mui/material/TextField";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useLazyQuery } from '@apollo/client';
import {GET_ONE_BOOK_BY_TITLE} from '../../../schema/query';

function BookDetails() {
  const [getBook, { loading: getBookLoading, error: getBookError, data: getBookData }] = useLazyQuery(GET_ONE_BOOK_BY_TITLE);
  const [title, setTitle] = React.useState("");

  const handleOnChange = (event) => {
    console.log("Old: " + title + ", New: " + event.target.value)
    setTitle(event.target.value);
  };

  const handleOnClick = () => {
    getBook({ variables: { title : title }})
  };

  return (
    <>
      <h2>Functional Component BookDetails</h2>
      <Box
        component="form"
        sx={{"& > :not(style)": { m: 1}}}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-title"
          label="Title"
          value={title}
          onChange={handleOnChange}
        />
        <Fab color="success" aria-label="add" onClick={handleOnClick}>
            <PlayArrowIcon fontSize="small" />
        </Fab>
        <p>{`${title}`}</p>
        {
          getBookLoading && <p>Loading ...</p>
        }
        {
          getBookError && <p>{`Error! ${getBookError.message}`}</p>
        }
        {
          getBookData?.findBookByTitle && <p>{`${getBookData.findBookByTitle.id} : ${getBookData.findBookByTitle.title} : ${getBookData.findBookByTitle.pages} : ${getBookData.findBookByTitle.rating.star}`}</p>
        }
      </Box>
    </>
  );
}

export default BookDetails;

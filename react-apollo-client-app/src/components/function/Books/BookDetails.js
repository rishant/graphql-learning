import React from "react";
import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import TextField from "@mui/material/TextField";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { useLazyQuery } from '@apollo/client';
import {GET_ONE_BOOK_BY_TITLE, GET_BOOK_BY_ID} from '../../../schema/query';

function BookDetails() {

  const [getBookByTitle, { loading: getBookByTitleLoading, error: getBookByTitleError, data: getBookByTitleData }] = useLazyQuery(GET_ONE_BOOK_BY_TITLE);
  const [title, setTitle] = React.useState("");
  const handleOnChange = (event) => {
    console.log("Old: " + title + ", New: " + event.target.value)
    setTitle(event.target.value);
  };  
  const handleOnClick = () => {
    getBookByTitle({ variables: { title : title }})
  };

  // const textfield = React.useRef();
  const [getBookById, { loading: getBookByIdLoading, error: getBookByIdError, data: getBookByIdData }] = useLazyQuery(GET_BOOK_BY_ID);
  const [bookId, setBookId] = React.useState("");
  const handleOnChangeById = (event) => {
    console.log("Old: " + bookId + ", New: " + event.target.value)
    setBookId(event.target.value);
  };
  const handleOnClickById = () => {
    getBookById({ 
      variables: { 
        id : bookId 
      }
    })
  };
  
  // const handleOnClickById2 = () => {
    // getBookById({ 
    //   variables: { 
    //     id : textfield.current.value 
    //   }
    // })
  // };

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
          getBookByTitleLoading && <p>Loading ...</p>
        }
        {
          getBookByTitleError && <p>{`Error! ${getBookByTitleError.message}`}</p>
        }
        {
          getBookByTitleData?.findBookByTitle && <p>{`${getBookByTitleData.findBookByTitle.id} : ${getBookByTitleData.findBookByTitle.title} : ${getBookByTitleData.findBookByTitle.pages} : ${getBookByTitleData.findBookByTitle.rating.star}`}</p>
        }

        <hr/>
        
        <TextField
          // inputRef={textfield}  // Uncontrolled Component Access via React.useRef() hook.
          id="outlined-title"
          label="BookID"
          value={bookId}
          onChange={handleOnChangeById}
        />
        <Fab color="success" aria-label="add" onClick={handleOnClickById} /*onClick={handleOnClickById2}*/>
            <PlayArrowIcon fontSize="small" />
        </Fab>
        <p>{`${bookId}`}</p>
        {
          getBookByIdLoading && <p>Loading ...</p>
        }
        {
          getBookByIdError && <p>{`Error! ${getBookByIdError.message}`}</p>
        }
        {
          getBookByIdData?.findBookById && <p>{`${getBookByIdData.findBookById.id} : ${getBookByIdData.findBookById.title} : ${getBookByIdData.findBookById.pages} : ${getBookByIdData.findBookById.rating.star}`}</p>
        }
      </Box>
    </>
  );
}

export default BookDetails;

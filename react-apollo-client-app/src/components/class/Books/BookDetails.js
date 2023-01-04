import React from "react";
import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import TextField from "@mui/material/TextField";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { Query } from "@apollo/client/react/components";
import {GET_ONE_BOOK_BY_TITLE, GET_BOOK_BY_ID} from '../../../schema/query';

class BookDetails extends React.Component {
  constructor(props) {
    super();
    // Define State Object
    this.state = {
      title: '', 
      getBookByTitleResponse: null, 
      bookId: '', 
      getBookByIdResponse: null
    };
    // this.textfield = React.createRef();
  }

  getBookByTitle = (bookTitle) => {
    console.log("I am in getBookByTile");
    return (
    <Query query={GET_ONE_BOOK_BY_TITLE} variables={{title: bookTitle}} onCompleted={data => console.log(data)} fetchPolicy={'network-only'}>
      {({ loading: getBookByTitleLoading, error: getBookByTitleError, data: getBookByTitleData }) => {
        if (getBookByTitleLoading) return <p>Loading…</p>;
        if (getBookByTitleError) return <p>Error {getBookByTitleError.message}</p>;
        return (<p>{getBookByTitleData.findBookByTitle.id} : {getBookByTitleData.findBookByTitle.title} : {getBookByTitleData.findBookByTitle.pages} : {getBookByTitleData.findBookByTitle.rating.star}</p>);
      }}
    </Query>
    );
  }
  handleOnChange = (event) => {
    console.log("Old: " + this.state.title + ", New: " + event.target.value)
    // Upsert State Object => For Re-render lifecycle
    this.setState({title: event.target.value})
  };  
  handleOnClick = () => {
    let response = this.getBookByTitle(this.state.title);
    // Upsert State Object => For Re-render lifecycle
    this.setState({getBookByTitleResponse: response});  
  };
  
  getBookById = (bookId) => {
    console.log("I am in getBookById");
    return (
    <Query query={GET_BOOK_BY_ID} variables={{id: bookId}} onCompleted={data => console.log(data)} fetchPolicy={'network-only'}>
      {({ loading: getBookByIdLoading, error: getBookByIdError, data: getBookByIdData }) => {
        if (getBookByIdLoading) return <p>Loading…</p>;
        if (getBookByIdError) return <p>Error {getBookByIdError.message}</p>;
        return (<p>{getBookByIdData.findBookById.id} : {getBookByIdData.findBookById.title} : {getBookByIdData.findBookById.pages} : {getBookByIdData.findBookById.rating.star}</p>);
      }}
    </Query>
    );
  }
  handleOnChangeById = (event) => {
    console.log("Old: " + this.state.bookId + ", New: " + event.target.value)
    // Upsert State Object => For Re-render lifecycle
    this.setState({bookId: event.target.value})
  };
  handleOnClickById = () => {
    let response = this.getBookById(this.state.bookId);
    // Upsert State Object => For Re-render lifecycle
    this.setState({getBookByIdResponse: response});  
  };

  // handleOnClickById2 = () => {
  //   let response = this.getBookById(this.textfield.current.value);
  //   // Upsert State Object => For Re-render lifecycle
  //   this.setState({getBookByIdResponse: response});  
  // };

  render() {
    return (
      <>
        <h2>Class Component BookDetails</h2>
        <Box
          component="form"
          sx={{"& > :not(style)": { m: 1}}}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-title"
            label="Title"
            value={this.state.title}
            onChange={this.handleOnChange}
          />
          <Fab color="success" aria-label="add" onClick={this.handleOnClick}>
              <PlayArrowIcon fontSize="small" />
          </Fab>
          <p>{this.state.title}</p>
          <p>{this.state.getBookByTitleResponse}</p>
          <hr/>
          <TextField
            // inputRef={this.textfield}  // Uncontrolled Component Access via React.createRef() hook.
            id="outlined-title"
            label="BookId"
            value={this.state.bookId}
            onChange={this.handleOnChangeById}
          />
          <Fab color="success" aria-label="add" onClick={this.handleOnClickById} /*onClick={this.handleOnClickById2}*/>
              <PlayArrowIcon fontSize="small" />
          </Fab>
          <p>{this.state.bookId}</p>
          <p>{this.state.getBookByIdResponse}</p>
        </Box>
      </>
    );
  }
}

export default BookDetails;

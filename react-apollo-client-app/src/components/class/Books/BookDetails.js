import React from "react";
import Box from "@mui/material/Box";
import Fab from '@mui/material/Fab';
import TextField from "@mui/material/TextField";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import { Query } from "@apollo/client/react/components";
import {GET_ONE_BOOK_BY_TITLE} from '../../../schema/query';

class BookDetails extends React.Component {
  constructor(props) {
    super();
    // Define State Object
    this.state = {title: '', getBookByTitleResponse: null};
  }

  getBookByTitle = (bookTitle) => {
    console.log("I am in getBookByTile");
    return (
    <Query query={GET_ONE_BOOK_BY_TITLE} variables={{title: bookTitle}} onCompleted={data => console.log(data)} fetchPolicy={'network-only'}>
      {({ loading: getAllBooksLoading, error: getAllBooksError, data: getAllBooksData }) => {
        if (getAllBooksLoading) return <p>Loading…</p>;
        if (getAllBooksError) return <p>Error {getAllBooksError.message}</p>;
        return (<p>{getAllBooksData.findBookByTitle.id} : {getAllBooksData.findBookByTitle.title} : {getAllBooksData.findBookByTitle.pages} : {getAllBooksData.findBookByTitle.rating.star}</p>);
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
        </Box>
      </>
    );
  }
}

export default BookDetails;

import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Tooltip from '@mui/material/Tooltip';

import { DataGrid } from "@mui/x-data-grid";

import { useQuery, useLazyQuery} from "@apollo/client";
import { GET_ALL_BOOKS } from "../../../schema/query";

function BookList() {
  // const { loading: getAllBooksLoading, error: getAllBooksError, data: getAllBooksData } = useQuery(GET_ALL_BOOKS, {
  //   fetchPolicy: 'network-only', // Used for first execution
  //   nextFetchPolicy: 'cache-first', // Used for subsequent executions
  // });
  const [getAllBooks, { loading: getAllBooksLoading, error: getAllBooksError, data: getAllBooksData }] = useLazyQuery(GET_ALL_BOOKS, {
    fetchPolicy: 'network-only', // Used for first execution
    nextFetchPolicy: 'cache-first', // Used for subsequent executions
  });

  React.useEffect(() => {
    getAllBooks();
  }, [])

  const getAllBooksJSX=()=> {
    return (
      <>
        { getAllBooksLoading? <p>Loading…</p>:'' }
        { getAllBooksError? <p>Error {getAllBooksError.message}</p>:'' }
        <DataGrid
          rows={getAllBooksData? getAllBooksData.allBooks: []}
          columns={bookColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </>
    )
  }

  const bookColumns = [
    { field: "id", 
      headerName: "ID", 
      width: 130, 
      renderCell: (params) => (
        <Tooltip title={params.value} >
          <span className="csutable-cell-trucate">{params.value}</span>
        </Tooltip>
      ),
    },
    { field: "title", 
      headerName: "Title", 
      width: 130, 
      renderCell: (params) => (
        <Tooltip title={params.value} >
          <span className="csutable-cell-trucate">{params.value}</span>
        </Tooltip>
      ),
    },
    { field: "pages", 
      headerName: "Pages", 
      width: 130,
      renderCell: (params) => (
        <Tooltip title={params.value} >
          <span className="csutable-cell-trucate">{params.value}</span>
        </Tooltip>
      )
    },
    {
      field: "rating",
      headerName: "rating",
      width: 130,
      renderCell: (params) => (
        <Tooltip title={params.value} >
          <span className="csutable-cell-trucate">{params.value}</span>
        </Tooltip>
      ),
      valueGetter: (params) => `${params.row.rating.star || ""}`,
    },
  ];

  return (
    <>
      <h2>Functional Component BookList</h2>
      <div style={{ display: "flex", height: "380px" }}>
        <div style={{ flexGrow: 1 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button size="small">Remove a row</Button>
            <Button size="small">Add a row</Button>
          </Stack>
          { getAllBooksJSX() }
          {/* {
            getAllBooksLoading? <p>Loading…</p>:''
          }
          {
            getAllBooksError? <p>Error {getAllBooksError.message}</p>:''
          }
          <DataGrid
            rows={getAllBooksData? getAllBooksData.allBooks: []}
            columns={bookColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          /> */}
        </div>
      </div>
    </>
  );
}

export default BookList;

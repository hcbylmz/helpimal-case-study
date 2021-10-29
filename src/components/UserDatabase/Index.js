import * as React from 'react';
import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'delete',
    label: 'Sil',
    minWidth: 50,
    align: 'right',
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
  createData("AAA", "AA", 67545757, 242495),
  createData("BBB", "BB", 146793744, 17098246),
  createData("CCC", "CC", 200962417, 923768)


];

export default function UserDatabase() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [newRow, setNewRow] = useState(rows);
  const [open, setOpen] = useState(false);
  const [arr,setArr] = useState([]);

  function handleDelete(a) {
    
    let indexNum = newRow.findIndex((s) => s.name == a.name);
        let newArr = [...newRow];
    newArr.splice(indexNum, 1);
    setArr(newArr);
    setOpen(true);
 
  }
  function handleDelete2 (){

    setNewRow(arr);
    setOpen(false);
  }
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '80%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
            
              {columns.map((column) => (
                <TableCell
         
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                 
                </TableCell>
              ))}
                   
            </TableRow>
          </TableHead>
          <TableBody>
            {newRow
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                   
                    {columns.map((column,index) => {
                      const value = row[column.id];
                      return (
                        
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                          {index===5?<Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>{ handleDelete(row);}}>DELETE</Button>:""}
                          
                        </TableCell>
                       
                      
                      );
                    })}
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 16, 17]}
        component="div"
        count={newRow.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
<div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Content"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          You will delete this content, right?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >Hayir</Button>
          <Button onClick={handleDelete2} autoFocus>
            Sil
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    </Paper>
  );
}

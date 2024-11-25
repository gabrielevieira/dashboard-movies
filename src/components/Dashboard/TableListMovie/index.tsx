import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Typography,
} from "@mui/material";

const TableListMovie = () => {
  return (
    <Container>
      <TableContainer component={Paper}>
        <Typography variant="h6" gutterBottom>
          List movie winners by year
        </Typography>
        <TextField
          label="Pesquisar"
          variant="outlined"
          // value={searchQuery}
          // onChange={handleSearch}
          fullWidth
          InputProps={{
            endAdornment: <IconButton>{/* <SearchIcon /> */}</IconButton>,
          }}
          style={{ marginBottom: "20px" }}
        />

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default TableListMovie;

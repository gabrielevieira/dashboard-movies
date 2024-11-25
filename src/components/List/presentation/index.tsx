import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const ListPresentation = () => {
  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <Typography variant="h6" gutterBottom>
        List movie winners by year
      </Typography>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>aqui</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover role="checkbox" tabIndex={-1}>
            <TableCell>aqui2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListPresentation;

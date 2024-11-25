import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const TableMultipleWin = () => {
  return (
    <Container>
      <TableContainer sx={{ minWidth: 100 }} component={Paper}>
        <Typography variant="h6" gutterBottom>
          List year with multiple winners
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Win Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">2020</TableCell>
              <TableCell align="right">5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default TableMultipleWin;

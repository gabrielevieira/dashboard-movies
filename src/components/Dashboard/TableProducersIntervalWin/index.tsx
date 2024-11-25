import {
  Container,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const TableProducersIntervalWin = () => {
  return (
    <Container>
      <div>
        <TableContainer sx={{ minWidth: 100 }} component={Paper}>
          <Typography variant="h6" gutterBottom>
            Producers with loggest and shortest interval between wins
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Maximum
          </Typography>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Producer</TableCell>
                <TableCell align="right">Interval</TableCell>
                <TableCell align="right">Previoues Year</TableCell>
                <TableCell align="right">Follwing Year</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Typography variant="subtitle1" gutterBottom>
            Manimum
          </Typography>
          <Table sx={{ minWidth: 100 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Producer</TableCell>
                <TableCell align="right">Interval</TableCell>
                <TableCell align="right">Previoues Year</TableCell>
                <TableCell align="right">Follwing Year</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
};
export default TableProducersIntervalWin;

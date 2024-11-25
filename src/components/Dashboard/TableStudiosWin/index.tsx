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

const TableStudiosWin = () => {
  return (
    <Container>
      <TableContainer sx={{ minWidth: 100 }} component={Paper}>
        <Typography variant="h6" gutterBottom>
          Top 3 studios with winners
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Win Count</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default TableStudiosWin;

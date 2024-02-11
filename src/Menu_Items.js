import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const MenuItems = ({ data }) => {
  const { nutrition } = data;
  const rows = nutrition?.nutrients?.map(({ name, amount, unit }) => {
    return { name, amount: amount + unit };
  });

  return (
    <div className="outer-container">
      <div className="category-details-card">
        <h2 className="desc">
          <TableContainer component={Paper}>
            <Table
              className="table-container"
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {rows?.map((row, index) => {
                    return (
                      <TableCell key={row.name + index} align="right">
                        {row.name}
                      </TableCell>
                    );
                  })}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map((row) => {
                  return <TableCell align="right">{row.amount}</TableCell>;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </h2>
      </div>
    </div>
  );
};

export default MenuItems;

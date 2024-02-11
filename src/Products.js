import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Products = ({ data }) => {
  const { generatedText, image, badges, nutrition, servings } = data;

  const rows = nutrition?.nutrients?.map(({ name, amount, unit }) => {
    return { name, amount: amount + unit };
  });

  return (
    <div className="outer-container">
      <div className="category-details-card">
        <img className="product-image" src={image} />
        <div className="details">
          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: generatedText }}
          ></p>
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
        </div>
      </div>
      <div className="badges product-badges">
        {badges?.map((badge) => {
          badge = badge.split("_").join(" ").toUpperCase();
          return <li className="badge">{badge}</li>;
        })}
      </div>
    </div>
  );
};

export default Products;

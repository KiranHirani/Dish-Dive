import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RecipeCard = ({ data }) => {
  const { image, summary, instructions, readyInMinutes, servings, glutenFree } =
    data;
  return (
    <div className="outer-container">
      <div className="category-details-card">
        <img src={image} />
        <div className="details">
          <p className="desc" dangerouslySetInnerHTML={{ __html: summary }}></p>
          <div>
            <Accordion className="expansion-panel">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Instructions
              </AccordionSummary>
              <AccordionDetails
                dangerouslySetInnerHTML={{ __html: instructions }}
              ></AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="badges">
        <span className="badge">{readyInMinutes} mins to prepare</span>
        <span className="badge">{servings} servings</span>
        <span className="badge">
          {glutenFree ? "Gluten Free" : "Contains Gluten"}
        </span>

        {data.diets?.map((element) => {
          return (
            <span className="badge">
              {element.charAt(0).toUpperCase() + element.slice(1)}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeCard;

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RecipeCard = ({ data }) => {
  const { image, summary, instructions, readyInMinutes, servings, glutenFree } =
    data;
  return (
    <div>
      <div>
        <div className="details recipe-details">
          <img src={image} />
          <p
            className="recipe-desc"
            dangerouslySetInnerHTML={{ __html: summary }}
          ></p>
        </div>
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
      <div className="badges">
        <span className="badge">{readyInMinutes} mins to prepare</span>
        <span className="badge">{servings} servings</span>
        {!glutenFree && <span className="badge">Contains Gluten</span>}

        {data?.diets?.map((element) => {
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

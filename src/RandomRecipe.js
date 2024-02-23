import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";
import { ALL_CATEGORIES } from "./shared/constant";

const RandomRecipe = ({ data }) => {
  const { image, summary, instructions, readyInMinutes, servings, glutenFree } =
    data;
  const { category } = useParams();
  return (
    <div>
      {category === ALL_CATEGORIES.ARTICLES ? (
        <h3 className="article-message">
          Hi there! We currently don't have any data for Articles category, So
          as a token of apology, we have shown you a recipe that we thought
          you'd like.
        </h3>
      ) : (
        ""
      )}
      <div>
        <div>
          <div className="details recipe-details">
            <img src={image} />
            <p
              className="desc"
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

          {data.diets?.map((element) => {
            return (
              <span className="badge">
                {element.charAt(0).toUpperCase() + element.slice(1)}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RandomRecipe;

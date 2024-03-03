import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { ProductAccordionStyled } from "modules/SeeDetails/SeeDetails.styled";

const productDetails = {
    "Imported?": "No",
    "Country of origin": "India",
    Quality: "Best",
    Composition: "Lorem Ipsum",
    Style: "Lorem Ipsum dolor",
};

const additionalProductDetails = {
    Doloribus:
        "Nostrum autem est et quasi eum deserunt. Culpa voluptas provident quidem et magni voluptatem accusamus. Repellat nulla aut et ut laboriosam vel dolor voluptates. Et voluptatem voluptatem quas soluta eligendi ea architecto voluptatem. Quia voluptate dolor ipsam. Quis illo ullam qui aut quo ut.",
    "Dolor of nostrum":
        "India vero voluptatem et est atque ut. Vel non nostrum in nulla dolor libero cumque. Et incidunt nisi quam error rerum ut. Consectetur maiores ipsum aut consequatur quam non sunt asperiores.",
    Deleniti:
        "Best et nobis rerum est sit et omnis. Quo veniam illum deleniti minima necessitatibus incidunt. Sit id quae adipisci eos voluptatem aliquam vero quam. Consequuntur impedit est dolorem sit veritatis consectetur natus. At ipsam sit quis eum.",
    Tempora:
        "Lorem Ipsum Et sunt blanditiis ut et et tempora repellat veniam. Et beatae voluptas et nobis nemo. Voluptatem et qui et minima. Et in iusto vel veniam ut enim et. Sed et vero aut sint autem ipsa assumenda. Asperiores repellendus quia enim enim. Maxime dolorum quo quis. Dolore est consequatur sit ut dolore numquam.",
    Officiis:
        "Lorem Ipsum dolor Consequatur officiis aut dolorem sit rerum corrupti veritatis eum. Possimus fugit consectetur culpa possimus nisi est laboriosam omnis. Tempora tempora quis id eum aliquam. Aut tempora perspiciatis assumenda voluptatem dolores sit a molestiae.",
};

function ProductAccordion() {
    return (
        <ProductAccordionStyled>
            <Accordion defaultExpanded sx={{ margin: "20px 0" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h3>Product Details</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {Object.entries(productDetails).map(([key, value], index) => {
                            return (
                                <li key={index}>
                                    <b>{key}</b>
                                    <p>{value}</p>
                                </li>
                            );
                        })}
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: "20px 0" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h3>Additional Product Details</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        {Object.entries(additionalProductDetails).map(([key, value], index) => {
                            return (
                                <li key={index} className="additional_details_li">
                                    <b>{key}</b>
                                    <p>{value}</p>
                                </li>
                            );
                        })}
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ margin: "20px 0" }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <h3>Terms and Conditions</h3>
                </AccordionSummary>
                <AccordionDetails>
                    <p style={{ marginTop: "0" }}>
                        The images represent actual product though color of the image and product may slightly differ.
                    </p>
                    <p>
                        SwiftCart does not select, edit, modify, alter, add or supplement the information, description and other specifications provided by the Seller.
                    </p>

                </AccordionDetails>
            </Accordion>
        </ProductAccordionStyled>
    );
}

export default ProductAccordion;

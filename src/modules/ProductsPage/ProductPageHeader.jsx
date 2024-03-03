import { Button, Grid } from "@mui/material"
import Filters from "./components/Filters"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { useSelector } from "react-redux";

function ProductPageHeader({ categories, control }) {
    const { shortlistedProducts, cart } = useSelector((state) => state.globalSlice);

    return (
        <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid item md={3} mt={1}>
                <Filters categories={categories} control={control} />
            </Grid>
            <Grid item md={3} mt={1}>
            </Grid>
            <Grid item md={3} mt={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    variant="contained"
                    disabled={cart.length ? false : true}
                    style={{
                        background: cart.length ? "rgb(30, 42, 168)" : " #CCCCCC",
                        cursor: cart.length ? "pointer" : "not-allowed",
                        pointerEvents: "all" // since disabled prop disables this 
                    }}
                >
                    View Cart{" "}
                    <ShoppingCartOutlinedIcon
                        style={{ marginLeft: "20px", fontSize: "20px" }}
                    />
                </Button>
            </Grid>
            <Grid item md={3} mt={1} >
                <Button
                    variant="contained"
                    disabled={shortlistedProducts.length ? false : true}
                    style={{
                        background: shortlistedProducts.length ? "rgb(30, 42, 168)" : " #CCCCCC",
                        cursor: shortlistedProducts.length ? "pointer" : "not-allowed",
                        pointerEvents: "all" // since disabled prop disables this 
                    }}
                >
                    View Shortlisted Products
                    <BookmarkAddedIcon
                        style={{ marginLeft: "20px", fontSize: "20px" }}
                    />
                </Button>
            </Grid>
        </Grid>
    )
}

export default ProductPageHeader
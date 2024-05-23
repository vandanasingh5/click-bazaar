import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="text-left font-bold text-lg py-5">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
        {[1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-4">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src="https://m.media-amazon.com/images/I/51gNG7uoAbL._AC_UL480_FMwebp_QL65_.jpg"
                  alt=""
                />

                <div className="text-left">
                  <p className="font-semibold">Women Maxi Dresses</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    <span>Color : pink</span> <span>Size : M</span>
                  </p>
                  <p>Seller: linaria</p>
                  <p>₹1099</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box sx={{ color: "#78C8F5" }}>
                <StarBorderIcon
                  sx={{ fontSize: "2rem" }}
                  fontSize={"2px"}
                  className="px-2"
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;

import { Box, Container } from "@mui/material";
import AssetCard from "./AssetCard";
import stockIcon from "./images/stock_v2.svg";
const StocskPage = () => {
  return (
    <div>
      <Box>
        <Container>
          <AssetCard
            assetName={"Акции"}
            assetImage={stockIcon}
            assetDetails={
              "Акция — это доля в компании, приобретая которую инвестор становится совладельцем бизнеса и может разделить его успехи и неудачи."
            }
          ></AssetCard>
        </Container>
      </Box>
    </div>
  );
};

export default StocskPage;

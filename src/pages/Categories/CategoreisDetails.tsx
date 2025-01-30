import { Helmet, HelmetProvider } from "react-helmet-async";
import Breadcrumbs from "@components/Breadcrumb";
import ProductsLoop from "@components/ProductCard/ProductsLoop";
import useProducts from "@components/ProductCard/useProduct";
import Lottie from "lottie-react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import empty from "@assets/LottieFiles/empty.json";

const CategoreisDetails = () => {
  const { prefix } = useParams();
  const { ProductsFullInfo } = useProducts();
  const CategoreisDetails = ProductsFullInfo.filter(
    (p) => p.cat_prefix == prefix
  );

  return (
    <HelmetProvider>
      <Helmet>
        <title>{prefix}</title>
        <meta name="keywords" content="Store , Product , ecommerce , login " />
        <meta
          name="description"
          content="Shop the latest products and find great deals on electronics, fashion, home goods, and more. Your one-stop online store for quality and value. Explore our wide range of electronics, including smartphones, laptops, and home appliances. Shop now for high-quality products at unbeatable prices"
        />
      </Helmet>
      <Container className="Categories">
        <Row>
          <Breadcrumbs />
          {CategoreisDetails.length > 0 ? (
            <ProductsLoop products={CategoreisDetails} />
          ) : (
            <div className="empty-cart">
              <Lottie animationData={empty} />
              <p>Sorry There are no no products in {prefix} for now</p>
            </div>
          )}
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default CategoreisDetails;

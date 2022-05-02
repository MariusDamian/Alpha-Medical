import { React } from "react";
import products from "../../components/JSON/products.json";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import Menu from "../../components/Navbar/Menu";
import AlphaTitle from "../../components/Reutils/AlphaTitle";
import AlphaSubtitle from "../../components/Reutils/AlphaSubtitle";
import Link from "next/link";
import Products from "../../components/HomePage/Products";

// Product Page

function ProductPage({ productsProps }) {
  const router = useRouter();
  const { productPage } = router.query;
  let currentProduct = productsProps?.find((produs) => produs.name.replace(/ /g, "-").toLowerCase() === productPage);

  return (
    <>
      <Head>
        <title>
          {currentProduct?.name} | {currentProduct?.Producator} | Alpha Medical
        </title>
        <meta name='description' content={currentProduct?.seoDescription ?? currentProduct?.smallDescription} />
        <meta name='keywords' content={currentProduct?.seoKeywords} />
      </Head>
      <Menu />
      <Navbar />
      <div className='bg-alpha-bg pb-20'>
        <div className='h-full pt-36 flex flex-row max-w-[1440px] mx-auto'>
          <div className='w-1/2 flex flex-col'>
            <div className='flex flex-row justify-between mt-5'>
              <Link href={"/produse"}>
                <button className='text-xl text-[#8D8D8D] hover:text-alpha-blue'>&lt; back</button>
              </Link>
              {/* <div className='flex flex-row space-x-2 p-2'>
                <button>
                  <img src='../../images/left-arrow.svg' alt='' />
                </button>
                <button>
                  <img src='../../images/right-arrow.svg' alt='' />
                </button>
              </div> */}
            </div>

            <h1 className='p-2 px-4 bg-[#7a9399] text-white w-fit my-8'>{currentProduct?.category}</h1>

            <AlphaTitle title={currentProduct?.name} />

            <div className='text-justify my-5 max-w-xl'>
              <AlphaSubtitle title={currentProduct?.fullDescription} />
            </div>

            <div className='max-w-xl flex justify-end mt-10'>
              <a href={currentProduct.extLink} target='_blank' rel='noreferrer'>
                <img src={`/images/partnerLogo/${currentProduct.Producator}.svg`} className='w-56' alt='' />
              </a>
            </div>
          </div>
          <img src={`/images/productImage/logoPic/${currentProduct.logoPic}`} alt='' className='w-1/2' />
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
}

export default ProductPage;

export async function getStaticPaths() {
  let data = products;

  // Get the paths we want to pre-render based on posts
  const paths = data.map((link) => ({
    params: { productPage: link.name.replace(/ /g, "-").toLocaleLowerCase() },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  return {
    props: { productsProps: products },
  };
}

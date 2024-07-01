import Head from "next/head";
import Footer from "./footer";
export default function Layout({
  children,
  title = "",
  description = "",
  og_title = "",
  og_description = "",
  og_locale = "",
  og_url = "",
  og_sitename = "",
  og_image = "",
  og_width = "",
  og_height = "",
  og_image_type = "",
  props = ""
}) {
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={og_title} />
        <meta property="og:description" content={og_description} />
        <meta property="og:locale" content={og_locale} />
        <meta property="og:url" content={og_url} />
        <meta property="og:site_name" content={og_sitename} />
        <meta property="og:image" content={og_image} />
        <meta property="og:image:width" content={og_width} />
        <meta property="og:image:height" content={og_height} />
        <meta property="og:image:type" content={og_image_type} />
      </Head>
      {children}
      <Footer />
    </>
  );
}

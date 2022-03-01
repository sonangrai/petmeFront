import Head from "next/head";

/**
 *
 * @param {*} param0
 * @returns A meta headers component
 */

const Meta = ({
  title = "Petgram",
  description = "A Petgram",
  image = "",
  twitterType = "",
  link = "",
}) => {
  return (
    <Head>
      <title>{title ? `${title} • Petgram` : "Petgram"}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={title ? `${title} • Petgram` : "Petgram"}
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:site_name"
        content={title ? `${title} • Petgram` : "Petgram"}
      />
      <meta property="og:image" content={`${link ? link : ""}/${image}`} />
      <meta property="twitter:card" content={twitterType} />
      <meta
        property="twitter:title"
        content={title ? `${title} • Petgram` : "Petgram"}
      />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={link} />
    </Head>
  );
};

export default Meta;

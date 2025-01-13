import React from "react";
import { Helmet } from "react-helmet";

const Seo = () => {
  return (
    <Helmet>
      <title>My Gatsby Site</title>
      <meta name="description" content="This is my awesome Gatsby site" />
    </Helmet>
  );
};

export default Seo;

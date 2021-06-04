import React, { useEffect } from "react";

//? Homepage
export const AdComponentHome = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", height: "100px !important" }}
      data-ad-client="ca-pub-1277633863266032"
      data-ad-slot="3031732450"
      data-ad-format="fluid"
      data-ad-layout="in-article"
      data-full-width-responsive="true"
      data-adtest="on"
    />
  );
};
//? Blog post ads that you need to ad above disqus comments
export const AdComponentBlogDisqus = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-1277633863266032"
      data-ad-slot="6196833028"
      data-adtest="on"
    />
  );
};
//? Horizontal ad to be added above footer in blog posts
export const AdComponentBlogFooter = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      style={{ display: "block" }}
      data-ad-client="ca-pub-1277633863266032"
      data-ad-slot="8448641591"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

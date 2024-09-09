import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles.css";

function Header({ bible, title, description, url, image }) {
  const [pageType, setState] = useState("norm");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentRuby = urlParams.get("type");
    setState(currentRuby || "norm");
  }, []);

  const toggleRuby = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let newState;

    if (pageType === "norm") {
      newState = "ruby";
    } else if (pageType === "ruby") {
      newState = "en";
    } else {
      newState = "norm";
    }

    urlParams.set("type", newState);
    window.location.search = urlParams.toString(); // Reload the page with the new state

    setState(newState); // Update the state
  };

  const toggleLang = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let newState;

    if (pageType === "norm") {
      newState = "en";
    } else {
      newState = "norm";
    }

    urlParams.set("type", newState);
    window.location.search = urlParams.toString(); // Reload the page with the new state

    setState(newState); // Update the state
  };

  return (
    <div className="header">
      <Helmet>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/static/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title || "ASMRキリスト教会"}</title>
        <meta
          name="description"
          content={description || "10代〜20代の若者へ..."}
        />
        <meta name="keywords" content="聖書, キリスト教, ASMR, 教会" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title || "ASMRキリスト教会"} />
        <meta
          property="og:description"
          content={description || "10代〜20代の若者へ..."}
        />
        <meta property="og:url" content={url || "https://www.asmrchurch.com"} />
        <meta
          property="og:image"
          content={
            image || "https://www.asmrchurch.com/static/images/kirikan.jpg"
          }
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@asmrchurch" />
        <meta name="twitter:creator" content="@asmrchurch" />
        <meta name="twitter:site" content="@asmrchurch" />
        <meta name="twitter:creator" content="@asmrchurch" />
        <meta name="twitter:title" content={title || "ASMRキリスト教会"} />
        <meta
          name="twitter:description"
          content={description || "10代〜20代の若者へ..."}
        />
        <meta
          name="twitter:image"
          content={
            image || "https://www.asmrchurch.com/static/images/kirikan.jpg"
          }
        />
      </Helmet>

      {/* Rest of the component remains the same */}
    </div>
  );
}

export default Header;

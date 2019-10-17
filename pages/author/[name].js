// @ts-nocheck
import React from "react";
import Head from "next/head";

import "./../../styles/author.scss";

const Author = ({ name, quotes }) => {
  return (
    <div className="author-body">
      <Head>
        <title>{name} - Quotes</title>
        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <span id="back-arrow">
        <a href="/">
          {" "}
          <i className="fa fa-arrow-left"></i>&nbsp;
        </a>
      </span>
      <h1 className="author-name">{name}</h1>
      {quotes.map((quote, i) => (
        <section className="quotes" key={i}>
          <div className="bubble">
            <blockquote>{quote.quoteText}</blockquote>
          </div>
        </section>
      ))}
    </div>
  );
};
Author.getInitialProps = async ({ query }) => {
  const name = query.name || "shakesphere";
  const res = await fetch(
    "https://quote-garden.herokuapp.com/quotes/author/" + name
  );
  const data = await res.json();

  return {
    quotes: data.results,
    name
  };
};
export default Author;

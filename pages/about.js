import React from "react";
import Head from "next/head";

const About = () => (
  <React.Fragment>
    <Head>
      <title>Home</title>

      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
    </Head>
    <div className="jumbotron text-center">
      <h1 className="display-3">Thank You!</h1>
      <p className="lead">
        This page is collection of resources from around the web
      </p>
      <p>
        This thank you page is taken from{" "}
        <a target="_blank" href="https://codepen.io/JacobLett/pen/vyegPV">
          Bootstrap 4 Thank You Page Template A PEN BY Jacob Lett PRO
        </a>
      </p>
      <p>
        The main page design for quote displaying is from{" "}
        <a
          target="_blank"
          href="https://codepen.io/flamur-ibrahimi/pen/GRKdLdW"
        >
          Quote Generator A PEN BY Flamur Ibrahimi
        </a>
      </p>
      <p>
        The Quotes are from{" "}
        <a target="_blank" href="https://github.com/lukePeavey/quotable">
          Quotable by lukePeavey
        </a>
      </p>
      <hr />
      <p>
        Want to see the code?{" "}
        <a href="https://github.com/safaldas/quotes-ssr">Quotes-ssr Github</a>
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-sm" href="/" role="button">
          Continue to homepage
        </a>
      </p>
    </div>
  </React.Fragment>
);
export default About;

// @ts-nocheck
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

import "../styles/index.scss";

// const data = {
//   _id: "5d91b45d9980192a317c8dcf",
//   quoteText: "Smile, breathe and go slowly.",
//   quoteAuthor: "Thich Nhat Hanh",
//   image: "https://picsum.photos/720/1300"
// };
const Home = ({ quote }) => {
  const colors = [
    "#FF5733",
    "#EEE034",
    "#6734EE",
    "#0ACA41",
    "#090909",
    "#852DF6",
    "#F62D67",
    "#e6e6e6"
  ];
  let colorLen = colors.length - 1;
  const initialState = {
    ...quote,
    fontColor: "white",
    wrapperBack: colors[2],
    backcolor: colors[5]
  };

  const [state, setState] = useState(initialState);
  const newQuote = async () => {
    const res = await fetch("https://quote-garden.herokuapp.com/quotes/random");
    const data = await res.json();
    let randColor = Math.round(Math.random() * colorLen);
    let newColor = randColor - Math.round(Math.random() * 3);
    randColor = Math.round(Math.random() * colorLen);

    colors[newColor] === "#EEE034" || colors[newColor] === "#e6e6e6"
      ? setState({
          ...state,
          ...data,
          fontColor: "black",
          wrapperBack: colors[newColor],
          backcolor: colors[randColor]
        })
      : setState({
          ...state,
          ...data,
          wrapperBack: colors[newColor],
          fontColor: "white",
          backcolor: colors[randColor]
        });
  };
  console.log(state);
  const { quoteText, quoteAuthor, image } = state;
  return (
    <div>
      <Head>
        <title>A quotes app | Nextjs demo</title>
        <meta
          name="description"
          content="A quote is fetched from the api and prerenders by Nextjs. This is a demo for the blog "
        ></meta>

        <link
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css?family=Abel|Dancing+Script&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="back"
        style={{
          backgroundColor: state.backcolor
        }}
      >
        <div className="container">
          <div className="center  maincon col-sm-12 my-auto ">
            <div
              className="col-sm-8 wrapper"
              id="quote-box"
              style={{
                backgroundColor: state.wrapperBack,
                color: state.fontColor
                // backgroundImage: `url('${image}')`
              }}
            >
              <div className="col-sm-12 textAuth flexItem">
                <h1 id="text">
                  <i className="fa fa-quote-left smaller"></i>&nbsp;
                  {quoteText}
                </h1>

                <h3 id="author">
                  <Link href="/author/[name]" as={`/author/${quoteAuthor}`}>
                    <a>
                      {" "}
                      <strong> - {quoteAuthor} -</strong>
                    </a>
                  </Link>
                </h3>
                <hr className="linie1" />
              </div>

              <div className="col-sm-4 rightCon flexItem">
                <button
                  className="quoteButton"
                  id="new-quote"
                  onClick={newQuote}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="info" href="/about" target="_blank">
        <i className="fa fa-question-circle-o"></i>&nbsp;
      </a>
    </div>
  );
};

Home.getInitialProps = async function() {
  const res = await fetch("https://quote-garden.herokuapp.com/quotes/random");
  const data = await res.json();
  return {
    quote: { ...data, image: "http://picsum.photos/700/520?blur&grayscale" }
  };
};
export default Home;

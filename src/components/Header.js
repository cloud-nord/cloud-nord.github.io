import React from "react";
import { graphql, StaticQuery } from "gatsby";

class Header extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeaderQuery {
            headerPage: file(
              relativePath: { eq: "header.md" }
              sourceInstanceName: { eq: "contents" }
            ) {
              childMarkdownRemark {
                frontmatter {
                  date
                  catchphrase
                  button
                  text
                  title
                }
              }
            }
          }
        `}
        render={data => (
          <section id="header">
            <div className="inner">
              <h1>
                <strong>
                  {data.headerPage.childMarkdownRemark.frontmatter.title}
                </strong>
              </h1>
              <h1>
                {data.headerPage.childMarkdownRemark.frontmatter.catchphrase}
              </h1>
              <h4>{data.headerPage.childMarkdownRemark.frontmatter.date}</h4>
              <h5>{data.headerPage.childMarkdownRemark.frontmatter.text}</h5>
              <ul className="actions">
                <li>
                  <a
                    href="/agenda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button scrolly"
                  >
                    {data.headerPage.childMarkdownRemark.frontmatter.button}
                  </a>
                </li>
              </ul>
            </div>
          </section>
        )}
      />
    );
  }
}

export default Header;

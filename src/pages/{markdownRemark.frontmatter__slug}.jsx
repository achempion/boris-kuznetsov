import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const ResearchPageTemplate = ({data}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Link to="/">Home</Link>
      <h1 className="relative z-10">{frontmatter.title}</h1>
      <div className="mt-[-10px]">{frontmatter.date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default ResearchPageTemplate;

export const Head = () => <title>Home Page</title>;
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

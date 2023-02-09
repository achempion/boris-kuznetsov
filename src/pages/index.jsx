import * as React from "react";
import { graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";


import Layout from "../components/layout";

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  const Research = edges.filter(edge => edge.node.frontmatter.slug.startsWith("/research")).map(edge => (
    <Link className="card" key={edge.node.id} to={edge.node.frontmatter.slug}>
      <h3>{edge.node.frontmatter.title}</h3>
    </Link>
  ));

  const Design = edges.filter(edge => edge.node.frontmatter.slug.startsWith("/design")).map(edge => (
    <Link className="card" key={edge.node.id} to={edge.node.frontmatter.slug}>
      <h3>{edge.node.frontmatter.title}</h3>
    </Link>
  ));

  return (
    <Layout>
      <div className="text-4xl mb-24 flex">
        <div>
          <StaticImage src="../images/boris-kuznetsov.jpeg" alt="Boris Kuznetsov" className="w-36 h-36 mr-12 rounded-full border border-accent dark:border-accent-dark mt-2" />
          <div className="flex ml-7 mt-2">
            <a href="https://twitter.com/adventofelixir" target="_blank" className="mr-2">
              <FaTwitter className="w-6"/>
            </a>
            <a href="https://github.com/achempion" target="_blank" className="mr-3">
              <FaGithub className="w-6"/>
            </a>
            <a href="mailto:me@achempion.com" className="">
              <FaEnvelope className="w-6"/>
            </a>
          </div>
        </div>
        <div className="">
          <div className="text-accent dark:text-accent-dark mb-8">Hey</div>
          <div>
            My name is Boris Kuznetsov <br />
            and I love making things for the web.
          </div>
        </div>
      </div>

      <div>
        <h2>Research / Talks</h2>
        <div className="flex">
          {Research}
        </div>
      </div>

      <div>
        <h2>Software design</h2>
        <div className="flex">
          {Design}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

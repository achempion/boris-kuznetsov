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

  const dates = [];
  const Research = edges.filter(edge => edge.node.frontmatter.slug.startsWith("/research")).map(edge => {
    let date;
    if (!dates.includes(edge.node.frontmatter.date)) {
      date = edge.node.frontmatter.date;
      dates.push(edge.node.frontmatter.date);
    }

    return (
      <div>
        {date && (
          <div className="w-24 border-r border-accent dark:border-accent-dark pr-4">&nbsp;</div>
        )}
        <div key={edge.node.id} to={edge.node.frontmatter.slug} className="flex items-center">
          <div className="text-4xl w-24 border-r border-accent dark:border-accent-dark pr-4">{date}&nbsp;</div>
          <div className="border-b border-accent dark:border-accent-dark w-4 mr-2"></div>
          <Link to={edge.node.frontmatter.slug}><h3>{edge.node.frontmatter.title}</h3></Link>
        </div>
      </div>
    )});

  const Design = edges.filter(edge => edge.node.frontmatter.slug.startsWith("/design")).map(edge => (
    <Link className="card" key={edge.node.id} to={edge.node.frontmatter.slug}>
      <h3>{edge.node.frontmatter.title}</h3>
    </Link>
  ));

  return (
    <Layout>
      <div className="text-4xl mb-24 flex">
        <div>
          <div className="overflow-hidden w-36 h-36 mr-12 rounded-full border border-accent dark:border-accent-dark mt-2">
            <StaticImage src="../images/boris-kuznetsov.jpeg" alt="Boris Kuznetsov" loading="eager" layout="fixed" width={142} height={142} imgStyle={{ borderRadius: '100%' }}/>
          </div>
          <div className="flex ml-7 mt-2">
            <a href="https://twitter.com/adventofelixir" target="_blank" rel="noreferrer" className="mr-2">
              <FaTwitter className="w-6"/>
            </a>
            <a href="https://github.com/achempion" target="_blank" rel="noreferrer" className="mr-3">
              <FaGithub className="w-6"/>
            </a>
            <a href="mailto:me@achempion.com" className="">
              <FaEnvelope className="w-6"/>
            </a>
          </div>
        </div>
        <div>
          <div className="text-accent dark:text-accent-dark mb-8">Hey</div>
          <div className="relative z-10">
            My name is Boris Kuznetsov <br />
            and I love making things for the web.
          </div>
        </div>
      </div>

      <div>
        <h2>Research / Talks</h2>
        <div className="">
          {Research}
          <div className="w-24 border-r border-accent dark:border-accent-dark pr-4">&nbsp;</div>
          <div className="w-24 border-r border-accent dark:border-accent-dark pr-4">&nbsp;</div>
        </div>
      </div>

      <div>
        <h2>Software design</h2>
        <div className="grid grid-cols-3 gap-4">
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
            date(formatString: "YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

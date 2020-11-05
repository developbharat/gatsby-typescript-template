import { graphql, PageProps } from "gatsby";
import React from "react";
export type IndexProps = {} & PageProps;

const Index: React.FC<IndexProps> = ({ data }) => {
  return (
    <div>
      <h1>Root Page of site.</h1>
      <p>Site Title: {(data as any).site.siteMetadata.title}</p>
      <p>Site Description: {(data as any).site.siteMetadata.description}</p>
      <p>Site Author: {(data as any).site.siteMetadata.author}</p>
    </div>
  );
};

export const query = graphql`
  query SiteQuery {
    site(siteMetadata: {}) {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;

export default Index;

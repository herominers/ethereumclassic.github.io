import React from 'react';
import { graphql } from 'gatsby';

import Mdx from '~components/mdx';
import BackButton from '~components/backButton';

import PageLayout from './pageLayout';

const BlogItem = ({ data: { mdx } }) => (
  <PageLayout link={{ to: '/blog', text: 'Blog' }} seo={{ title: mdx.frontmatter.title }}>
    <div className="blog-post">
      <h1>{mdx.frontmatter.title}</h1>
      <h3>
        {/* TODO replace with i18nnext for dates and such */}
        {`${new Date(mdx.frontmatter.date).toLocaleDateString()} `}
        <small>{mdx.frontmatter.author}</small>
      </h3>
      <Mdx code={mdx.body} />
    </div>
    <hr />
    <BackButton text="All Blog Articles" to="/blog" />
  </PageLayout>
);

export default BlogItem;

export const query = graphql`
  query BlogItem($locale: String!, $title: String!) {
    mdx(frontmatter: { title: { eq: $title } }, fields: { locale: { eq: $locale } }) {
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`;

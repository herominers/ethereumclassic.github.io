import React from 'react';
import { defaultLocale } from '../i18n/config';
import Link from './link';

// TODO replace this localeDateString

const LatestBlogPostsItem = ({ data }) => {
  const { locale } = data.fields;
  const { relativeDirectory: dir } = data.parent;
  const to = locale === defaultLocale ? `/${dir}` : `/${locale}${dir}`;
  return (
    <Link className="item" to={to} notLocalized>
      <h4>
        {`${new Date(data.frontmatter.date).toLocaleDateString()} `}
        <small>{data.frontmatter.author}</small>
      </h4>
      <h3>{data.frontmatter.title}</h3>
      <p>{data.excerpt}</p>
    </Link>
  );
};

export default LatestBlogPostsItem;

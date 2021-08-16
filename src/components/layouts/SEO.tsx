import React, { ReactElement } from 'react';
import {Helmet} from "react-helmet-async";
import common from './common.json'

export interface SEOAttribute<P = any> {
  title?: string,
  description?: string,
  image?: string | null,
  useSuffix?: boolean,
  props?: P,
  meta?: any[]
}

const SEO = ({ title = "", description = "", meta = [], image = null, useSuffix = true }: SEOAttribute): ReactElement<SEOAttribute> => {
  const metaDescription = description || common.siteMetadata.description;
  const suffix = common.siteMetadata.suffix;
  const defaultTitle = title || common.siteMetadata.title;
  const renderedTitle = defaultTitle && useSuffix ? `${defaultTitle} | ${suffix}` : defaultTitle;

  return (
    <>
      <Helmet>
        <title>{renderedTitle}</title>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="description" content={metaDescription} />
      </Helmet>
    </>
  )
}

export default SEO;
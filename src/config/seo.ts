export type SeoMetaSource = {
  title?: string;
  lang?: string;
  description?: string;
  author?: string;
  meta: ConcatArray<MetaSeo>;
};

export type MetaSeo =
  | { name: string; content: string | undefined; property?: undefined }
  | { property: string; content: string | undefined; name?: undefined };

export const SeoMetaSource: ({
  description,
  author,
  meta,
  title,
}: SeoMetaSource) => MetaSeo[] = ({
  description,
  author,
  meta,
  title,
}: SeoMetaSource) =>
  [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

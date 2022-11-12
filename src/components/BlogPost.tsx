import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function BlogPost(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post = data.post;

  return (
    <>
      <h1>{post.title}</h1>
      <TinaMarkdown content={post.body} />
    </>
  );
}

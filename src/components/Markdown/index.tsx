import { MarkdownHooks } from 'react-markdown';

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <article>
      <MarkdownHooks>{content}</MarkdownHooks>
    </article>
  );
}

export default function TypographyDemo() {
  return (
    <div >
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-lg font-medium tracking-tight transition-colors first:mt-0">
        Welcome to the Typography Demo
      </h2>

      <p className="leading-7 text-sm mt-6">
        This is a paragraph demonstrating the base text style. It includes a{' '}
        <a href="#" className="font-medium text-primary underline underline-offset-4">
          link to nowhere
        </a>{' '}
        to show anchor styling.
      </p>

      <h3 className="mt-8 scroll-m-20 text-md font-medium tracking-tight">Lists</h3>

      <ul className="my-4 ml-6 list-disc [&>li]:mt-2">
        <li className="text-sm">First item in an unordered list</li>
        <li className="text-sm">Second item with a nested paragraph
          <p className="leading-7 text-sm">This paragraph is inside a list item, so it doesn&apos;t have a top margin.</p>
        </li>
        <li className="text-sm">Third item in the list</li>
      </ul>

      <h3 className="mt-8 scroll-m-20 text-md font-medium tracking-tight">Blockquote</h3>

      <blockquote className="text-sm mt-6 border-l-2 pl-6 italic">
        This is a blockquote. It&apos;s styled with a left border and italic text.
      </blockquote>

      <h3 className="mt-8 scroll-m-20 text-md font-medium tracking-tight">Code</h3>

      <p className="leading-7 text-sm mt-6">
        Here&apos;s an example of inline <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">code</code> within a paragraph.
      </p>

      <pre className="mt-6 p-4 bg-muted rounded">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium">
          {`const greet = (name) => {
  console.log(\`Hello, \${name}!\`);
};

greet('World');`}
        </code>
      </pre>
    </div>
  );
};

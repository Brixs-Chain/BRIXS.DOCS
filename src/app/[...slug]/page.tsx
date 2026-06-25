import { promises as fs } from 'fs';
import path from 'path';
import Sidebar from '@/components/Sidebar';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

// Import our custom MDX components
import { FeatureGrid } from '@/components/mdx/FeatureGrid';
import { FeatureCard } from '@/components/mdx/FeatureCard';
import { AnimatedPieChart } from '@/components/mdx/AnimatedPieChart';
import { Callout } from '@/components/mdx/Callout';

import { Keyword } from '@/components/mdx/Keyword';
import { CodeBlock } from '@/components/mdx/CodeBlock';
import { StackVisualizer } from '@/components/StackVisualizer';
import Link from 'next/link';

const components = {
  FeatureGrid,
  FeatureCard,
  AnimatedPieChart,
  Callout,
  Keyword,
  StackVisualizer,
  pre: CodeBlock,
  h2: ({ children }: any) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
    return <h2 id={id} className="scroll-mt-20">{children}</h2>;
  },
  h3: ({ children }: any) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, '-');
    return <h3 id={id} className="scroll-mt-20">{children}</h3>;
  }
};

function getSidebarConfig(category: string) {
  if (category === 'wallets') {
    return [
      { title: 'Overview', href: '/wallets/overview' },
      { 
        title: 'Custodial', 
        items: [
          { title: 'Overview', href: '/wallets/custodial/overview' },
          { title: 'Quickstart', href: '/wallets/custodial/quickstart' }
        ]
      },
      { 
        title: 'Non-custodial', 
        items: [
          { title: 'Overview', href: '/wallets/non-custodial/overview' },
          { title: 'SDK Integration', href: '/wallets/non-custodial/sdk' }
        ]
      }
    ];
  }
  if (category === 'platform') {
    return [
      { title: 'Introduction', href: '/platform/overview' },
      { 
        title: 'Architecture', 
        items: [
          { title: 'Consensus', href: '/platform/consensus' },
          { title: 'Data Model', href: '/platform/data-model' },
          { title: 'Topology', href: '/platform/topology' }
        ]
      }
    ];
  }
  return [
    { title: 'Overview', href: `/${category}/overview` },
    { 
      title: 'Documentation', 
      items: [
        { title: 'Quickstart', href: `/${category}/quickstart` },
        { title: 'Advanced', href: `/${category}/advanced` }
      ]
    }
  ];
}

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || [];
  if (slug.length === 0) {
    return <div>Page Not Found</div>;
  }
  const slugPath = slug.join('/');
  const category = slug[0];
  const sidebarItems = getSidebarConfig(category);

  let content = "## Page Not Found\nWe couldn't find the documentation for this path.";
  try {
    let filePath = path.join(process.cwd(), 'src', 'content', slugPath + '.mdx');
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch {
      filePath = path.join(process.cwd(), 'src', 'content', slugPath + '.md');
      content = await fs.readFile(filePath, 'utf8');
    }
  } catch (e) {
  }

  // Parse TOC
  const toc: { level: number, text: string, id: string }[] = [];
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    toc.push({
      level: match[1].length,
      text: match[2],
      id: match[2].toLowerCase().replace(/\s+/g, '-')
    });
  }

  return (
    <div className="flex flex-col md:flex-row flex-1 overflow-hidden h-full">
      <Sidebar items={sidebarItems} />
      <main className="flex-1 overflow-y-auto px-4 py-6 md:px-8 md:py-10 scroll-smooth w-full">
        <div className="max-w-4xl mx-auto">
          {/* Mobile TOC */}
          {toc.length > 0 && (
            <div className="xl:hidden mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-black">On this page</h4>
              <ul className="space-y-2 text-sm">
                {toc.map((heading, i) => (
                  <li key={i} className={heading.level === 3 ? "ml-4" : ""}>
                    <Link href={`#${heading.id}`} className="text-blue-600 hover:text-black transition-colors block leading-tight font-medium">
                      {heading.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose prose-slate prose-headings:font-bold prose-a:text-black hover:prose-a:underline max-w-none">
            <MDXRemote 
              source={content} 
              components={components}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </div>
      </main>
      <aside className="w-64 hidden xl:block border-l border-gray-200 p-6 overflow-y-auto shrink-0">
        <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-black">On this page</h4>
        {toc.length > 0 ? (
          <ul className="space-y-3 text-sm">
            {toc.map((heading, i) => (
              <li key={i} className={heading.level === 3 ? "ml-4" : ""}>
                <Link href={`#${heading.id}`} className="text-gray-500 hover:text-black transition-colors block leading-tight">
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm text-gray-500">No headings on this page.</div>
        )}
      </aside>
    </div>
  );
}

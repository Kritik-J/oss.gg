import { GitMerge, GitPullRequestDraft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Issue {
  href: string;
  logoHref: string;
  title: string;
  author: string;
  state?: string;
  draft?: boolean;
}

const GitHubIssue: React.FC<{ issue: Issue }> = ({ issue }) => {
  return (
    <Link
      href={issue.href}
      target="_blank"
      key={issue.title}
      className="mb-2 flex items-center space-x-3 rounded-lg bg-muted p-3 transition-all duration-150 ease-in-out hover:scale-102 hover:cursor-pointer">
      {issue.draft ? (
        <div className="rounded-md border border-gray-200 bg-white p-2">
          <GitPullRequestDraft className="h-8 w-8 text-gray-500" />
        </div>
      ) : issue.state === "open" ? (
        <div className="rounded-md border border-gray-200 bg-white p-2">
          <GitMerge className="h-8 w-8 text-green-500" />
        </div>
      ) : (
        <Image className="rounded-md" src={issue.logoHref} alt={issue.title} width={50} height={50} />
      )}
      <div>
        <p className="font-medium">{issue.title}</p>
        <p className="mt-0.5 text-xs">opened by {issue.author}</p>
      </div>
    </Link>
  );
};

export default GitHubIssue;
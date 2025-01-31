import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t h-8 flex items-center justify-center">
      <p className="text-xs text-center">
        Built by Sarthak. The source code is available on{" "}
        <Link
          href="https://github.com/srthkaggrwl/My_Portfolio"
          target="_blank"
          rel="noreferrer"
          className="font-medium underline underline-offset-4"
        >
          GitHub
        </Link>
        .
      </p>
    </footer>
  );
}

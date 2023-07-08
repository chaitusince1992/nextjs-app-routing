import Link from "next/link";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ul>
        <li>
          <Link href="/">AtlasX</Link>
        </li>
        <li>
          <Link href="/pipeline">Pipeline</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
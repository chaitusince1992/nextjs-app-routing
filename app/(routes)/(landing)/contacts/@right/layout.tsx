import Link from "next/link";

export default function ContactRightLayout(params: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href={"/contacts/right"}>Click me</Link>
      </div>
      <div>Right Contact</div>
      <div>{params.children}</div>
    </div>
  );
}

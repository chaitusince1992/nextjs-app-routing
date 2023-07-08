import Link from "next/link";

export default function ContactLeftLayout(params: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Link href={"/contacts/left"}>Click me</Link>
      </div>
      <div>Left Contact</div>
      <div>{params.children}</div>
    </div>
  );
}

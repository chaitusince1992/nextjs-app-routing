import Link from "next/link";

export default function LandingLayout(props: { children: React.ReactNode, modal: React.ReactNode }) {
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
          <li>
            <Link href="/companies">Companies</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
          <li style={{color:"blue"}}>
            <Link href="/new-deal">New Deal</Link>
          </li>
        </ul>
        <div className="route-child">{props.children}</div>
        <div className="modal-child">{props.modal}</div>
      </>
    );
}
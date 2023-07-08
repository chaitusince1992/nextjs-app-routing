// import Link from "next/link";

import Link from "next/link";
import React from "react";

export default function PipelineLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>Pipeline</h1>
      <table>
        <tbody>
          <tr>
            <td><Link href={"/pipeline/abc"}>Deal abc</Link></td>
          </tr>
          <tr>
            <td><Link href={"/pipeline/xyz"}>Deal xyz</Link></td>
          </tr>
          <tr>
            <td><Link href={"/pipeline/none"}>Deal None</Link></td>
          </tr>
        </tbody>
      </table>
      {props.children}
    </>
  );
}
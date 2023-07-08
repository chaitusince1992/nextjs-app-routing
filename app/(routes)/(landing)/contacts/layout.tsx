import React from "react";

export default function PipelineLayout(props: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <>
      <h1>Contacts</h1>
      {props.left}
      {props.right}
    </>
  );
}
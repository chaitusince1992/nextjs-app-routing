"use client";

import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   const onDismiss = useCallback(() => {
//     router.back();
//   }, [router]);

//   const onClick = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>) => {
//       if (e.target === overlay.current || e.target === wrapper.current) {
//         if (onDismiss) onDismiss();
//       }
//     },
//     [onDismiss, overlay, wrapper]
//   );

//   const onKeyDown = useCallback(
//     (e: React.KeyboardEvent<HTMLDivElement>) => {
//       if (e.key === "Escape") onDismiss();
//     },
//     [onDismiss]
//   );

//   useEffect(() => {
//     const onKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") onDismiss();
//     };

//     document.addEventListener("keydown", onKeyDown);

//     return () => {
//       document.removeEventListener("keydown", onKeyDown);
//     };
//   }, [onDismiss]);

  return (
    //   className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/60"
    //   onClick={onClick}
    <div
      ref={overlay}
      style={{position: "fixed",bottom: 0,left: 0,right:0,top:0,zIndex:10,margin:"0 auto",backgroundColor: "#00000088"}}
    >
        {/* className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-6" */}
      <div
        ref={wrapper}
        style={{position: "absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",padding: "10px"}}
      >
        {children}
      </div>
    </div>
  );
}
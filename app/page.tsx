// export default function Page() {
//   return <h1>Hello, Next.js!</h1>;
// }
import { redirect } from 'next/navigation';
export default async function Home() {
  redirect("/pipeline");
}
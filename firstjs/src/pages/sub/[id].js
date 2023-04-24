import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <>
      <h1>여기는 pages/sub/[id].js : {id}</h1>
      <a href="/">pages/index.js</a>
    </>
  );
}

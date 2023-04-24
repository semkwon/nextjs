import { useRouter } from "next/router";

export default function IdAbout() {
  const router = useRouter();
  const id = Number(router.query.id);

  return (
    <>
      <h1>IdAbout</h1>
      <p>{id}번 라우터</p>
      <a href="/">Home</a>
    </>
  );
}

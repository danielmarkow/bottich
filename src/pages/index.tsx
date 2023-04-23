import { type NextPage } from "next";

import Link from "next/link";
import Button from "~/components/common/Button";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <p>todo: hero page</p>
        <Link href="/todos">
          <Button>Todos</Button>
        </Link>
      </main>
    </>
  );
};

export default Home;

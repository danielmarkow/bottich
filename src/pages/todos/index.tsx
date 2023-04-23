import { SignInButton, useUser, useClerk } from "@clerk/nextjs";
import Button from "~/components/common/Button";

export default function Todos() {
  const { signOut } = useClerk();
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <div />;

  return (
    <>
      <p>todos</p>
      {isSignedIn ? (
        <>
          <p>your todos...</p>
          <button onClick={() => void signOut()}>Sign out</button>
        </>
      ) : (
        <SignInButton />
      )}
    </>
  );
}

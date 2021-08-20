import Head from "next/head";
import { useStateContext } from "../componets/hboProvider";
import Login from "../componets/ui/login/login";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push("/create");
    }
  }, []);

  return (
    <div>
      <Login></Login>
    </div>
  );
}

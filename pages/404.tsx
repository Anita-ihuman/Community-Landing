import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1> ooooooopppppppppssssss.....</h1>
      <h2>page nor found</h2>
      <p>
        Go back to thea{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};
export default Error;

import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return <>
  <NavBar />
    <Component {...pageProps} />;
  </> 
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blogs">Blogs</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

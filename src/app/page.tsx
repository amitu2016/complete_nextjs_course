import Image from "next/image";
import ClientBtn from "./components/ClientButton";
import ServerBtn from "./components/ServerButton";

export default function Home() {
  return (
   <div>
    Landing Page
      <div>
        <ClientBtn />
      </div>
      <div>
        <ServerBtn />
      </div>
   </div>
  );
}

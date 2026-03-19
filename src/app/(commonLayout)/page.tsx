import Logo from "@/components/common/Logo/Logo";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        Welcome to LoveTrave
        <Logo></Logo>
      </div>
    </div>
  );
}

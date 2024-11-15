import { buttonVariants } from "@/modules/core/components/button";
import Link from "next/link";

const links = [
  {
    href: "/new-form",
    title: "Try Demo",
  },
  {
    href: "/login",
    title: "Login",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900 p-24">
      <div className="flex justify-between items-center flex-col h-44">
        <section>
          <h1 className="text-8xl  text-fuchsia-600 font-bold text-center">
            <span className="text-fuchsia-600">Form</span>
            <span>Builder</span>
          </h1>
          <h3 className="text-2xl mt-4 mb-24 text-neutral-300 font-medium">
            Create smart forms in minutes, powered by artificial intelligence.
          </h3>
        </section>
        <section>
          <div>
            {links.map((link) => (
              <Link
                key={link.href}
                className={buttonVariants({
                  variant: "outline",
                  className: "m-1 w-32 text-center",
                })}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

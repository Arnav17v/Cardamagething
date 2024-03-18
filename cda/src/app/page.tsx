import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <article className="grid lg:grid-cols-2  max-w-[88rem] m-auto">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            Jaagte Raho! Stay Sharp, Stay Focused.
          </h1>
          <div className="flex gap-2 mt-8">
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              <button className="btn-shine">
                <span>Learn more</span>
              </button>
              <div className="m-auto"></div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img className="" src={"next2.svg"} alt={""}></img>
        </div>
      </article>
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">Why use Jaagte Raho!</h2>
        <p className="mt-2">
          <a
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            className="font-medium text-primary-600 hover:underline"
          ></a>
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Stay Alert on the Road:</h3>
            <p className="text-gray-700">
              Our AI keeps you awake and focused behind the wheel.
            </p>
            <div className="grow"></div>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Beat Fatigue, Anytime</h3>
            <p className="text-gray-700">
              Jaagte Rah! helps students, professionals, and anyone conquer
              fatigue.
            </p>
            <div className="grow"></div>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">
              Your Companion for Vigilance:
            </h3>
            <p className="text-gray-700">
              Stay sharp and aware with our app, designed for drivers, watchmen,
              and more.
            </p>
            <div className="grow"></div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

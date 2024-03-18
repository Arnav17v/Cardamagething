const Footer = () => {
  return (
    <footer className="">
      <div className="p-10 flex flex-col items-center justify-center m-[80px]">
        <a
          href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
          className="font-medium text-primary-600 hover:underline"
        ></a>
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
          <a
            className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
            href="#about"
          >
            <button className="btn-shine">
              <span>About Us</span>
            </button>
          </a>
          <a
            className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
            href="./pricing"
          >
            <button className="btn-shine">
              <span>Pricing</span>
            </button>
          </a>
          <a
            className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
            href="/dashboard"
          >
            <button className="btn-shine">
              <span>Try Out</span>
            </button>
          </a>
        </div>
        <div className="mt-4 text-gray-600">
          <p>Contact: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        //hihihaha
      </div>
    </footer>
  );
};
export default Footer;

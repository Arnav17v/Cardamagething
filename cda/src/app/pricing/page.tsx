import Footer from "../Footer";
import Header from "../Header";

const Pricing = () => {
  return (
    <>
      <div className="sticky top-0 bg-white z-10">
        <Header />
      </div>
      <div className="bg-slate-100 flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
        <p className="mt-4 text-gray-600 text-center">
          Choose a plan that works for you
        </p>
        <div className="flex gap-4 mt-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">Free Version</p>
                <p>Details</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Free version</p>
                <p>
                  You can try out aur app for the next 7 days.If you like it
                  upgrade!
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">Monthly</p>
                <p>Rs.700</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Monthly Plan</p>
                <p className="text-left p-4">
                  <ul className="list-disc list-inside">
                    <li>24/7 Chatbot Support</li>
                    <li>Custom alerts!</li>
                    <li>Emergency Services</li>
                    <li>Historical Landmark narration for infotainment</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">Yearly Plan</p>
                <p>Rs.8000 (+1 month free)</p>
              </div>
              <div className="flip-card-back">
                <p className="title">Yearly Plan</p>
                <div className="text-left p-4">
                  <ul className="list-disc list-inside">
                    <li>24/7 Chatbot Support</li>
                    <li>Custom alerts!</li>
                    <li>Emergency Services</li>
                    <li>Historical Landmark narration for infotainment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Pricing;

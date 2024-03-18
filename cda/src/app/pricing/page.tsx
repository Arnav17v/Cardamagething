import Footer from "../Footer";
import Header from "../Header";

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-20">
        <h1 className="text-4xl font-bold text-center">Pricing</h1>
        <p className="mt-4 text-gray-600 text-center">
          Choose a plan that works for you
        </p>
        <div className="flex gap-4 mt-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">FLIP CARD</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card-back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">FLIP CARD</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card-back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">FLIP CARD</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card-back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">FLIP CARD</p>
                <p>Hover Me</p>
              </div>
              <div className="flip-card-back">
                <p className="title">BACK</p>
                <p>Leave Me</p>
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

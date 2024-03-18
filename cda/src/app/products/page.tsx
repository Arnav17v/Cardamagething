import Footer from "../Footer";
import Header from "../Header";

const products = () => {
  return (
    <div>
      <Header />
      <div className="bg-slate-200">
        <div className="flex justify-between p-10 max-w-[66rem] m-auto">
          <div>image</div>
          <div>discription</div>
        </div>
        <div className="flex justify-between p-10 max-w-[66rem] m-auto">
          <div>image</div>
          <div>discription</div>
        </div>
        <div className="flex justify-between p-10 max-w-[66rem] m-auto">
          <div>image</div>
          <div>discription</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default products;

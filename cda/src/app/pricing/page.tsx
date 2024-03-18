const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <h1 className="text-4xl font-bold text-center">Pricing</h1>
      <p className="mt-4 text-gray-600 text-center">
        Choose a plan that works for you
      </p>
      <div className="flex gap-4 mt-10">
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Starter</h2>
          <p className="mt-4 text-gray-600">For small teams</p>
          <h3 className="mt-4 text-3xl font-bold">$9</h3>
          <p className="mt-4 text-gray-600">Per user, per month</p>
          <button className="mt-8 px-6 py-2 font-semibold text-white bg-primary-600 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Pro</h2>
          <p className="mt-4 text-gray-600">For larger teams</p>
          <h3 className="mt-4 text-3xl font-bold">$19</h3>
          <p className="mt-4 text-gray-600">Per user, per month</p>
          <button className="mt-8 px-6 py-2 font-semibold text-white bg-primary-600 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pricing;

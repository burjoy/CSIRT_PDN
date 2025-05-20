const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Consulting</h3>
          <p className="text-gray-600">Expert guidance for your business needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Development</h3>
          <p className="text-gray-600">Custom software solutions tailored to your requirements.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Analytics</h3>
          <p className="text-gray-600">Data-driven insights for informed decision making.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
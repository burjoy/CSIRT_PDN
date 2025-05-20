const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to PDN</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Website ini merupakan tempat PDN
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Innovation</h3>
          <p className="text-gray-600">Leading the way in technological advancement and creative solutions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Excellence</h3>
          <p className="text-gray-600">Committed to delivering the highest quality in everything we do.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Partnership</h3>
          <p className="text-gray-600">Building lasting relationships with our clients and partners.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
const Organisasi = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Ketua</h3>
          <p className="text-gray-600">Pak XY</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Wakil Ketua</h3>
          <p className="text-gray-600">Bu VO</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Sekretaris</h3>
          <p className="text-gray-600">Pak BN</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4">Bendahara</h3>
          <p className="text-gray-600">Pak BA</p>
        </div>
        <p>Inget, ini cuman template, tar ubah lagi</p>
      </div>
    </div>
  );
};

export default Organisasi;
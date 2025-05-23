const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="h-120 grid grid-cols-2 bg-white p-6 rounded-lg shadow-md">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact us</h3>
          <p className="text-gray-600">
            Kementerian Komunikasi dan Digital RI
            <br />
            Computer Security Incident Response Team (CSIRT) Pusat Data
            Nasional.
            <br />
            <br />
            Jl. Medan Mereda Barat No. 9<br />
            Jakarta Pusat 10110
            <br />
            (021) 3504024
            <br />
            csirt@xxx.go.id
            <br />
            Mon-Thur: 08:00-16:30
            <br />
            Fri: 08:00-17:00
            <br />
          </p>
        </div>
        <div>
          <iframe
            class="h-80 lg:h-full md:h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.358327969945!2d106.7842571743164!3d-6.1749432999999945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d47c71fdaf%3A0x56d2a62dc19ddbc9!2sKementerian%20Komunikasi%20dan%20Informatika%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1703482405037!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

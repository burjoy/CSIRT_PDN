import { StateReducer, initial_state } from "../state_management/StateReducer";
import { useReducer } from "react";

const Contact = () => {
  const [state, dispatch] = useReducer(StateReducer, initial_state);
  return (
    <section class="text-gray-600 body-font relative">
      <div class="bg-white rounded-md container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            title="map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jalan%20Merdeka%20Barat%20No.9+(Kementerian%20Komunikasi%20dan%20Digital%20Republik%20Indonesia)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Alamat
              </h2>
              <p class="mt-1">
                Jl. Medan Mereda Barat No. 9<br />
                Jakarta Pusat 10110
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Surel
              </h2>
              <a class="text-blue-500 leading-relaxed">csirt-pdn@email.com</a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Telepon
              </h2>
              <p class="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
            Kontak
          </h2>
          <p class="leading-relaxed mb-5 text-gray-600">
            Hubungi kami terkait pertanyaan atau aduan siber
          </p>
          <div class="relative mb-4">
            <label
              htmlFor="name"
              class="leading-7 text-sm text-gray-600"
            >
              Nama Instansi
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
            />
          </div>
          <div class="relative mb-4">
            <label
              htmlFor="email"
              class="leading-7 text-sm text-gray-600"
            >
              Surel
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
              onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
            />
          </div>
          <div class="relative mb-4">
            <label
              htmlFor="message"
              class="leading-7 text-sm text-gray-600"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
              onChange={(e) => dispatch({ type: 'SET_MESSAGE', payload: e.target.value })}
            ></textarea>
          </div>
          <button class="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={() => {dispatch({ type: 'RESET_FORM' });console.log(state);}}>
            Kirim
          </button>
          <p class="text-xs text-gray-500 mt-3">
            Pesan Anda akan kami proses secepatnya.
          </p>
        </div>
      </div>
    </section>
    // <div className="container mx-auto px-4 py-12">
    //   <div className="h-120 grid grid-cols-2 bg-white p-6 rounded-lg shadow-md">
    //     <div>
    //       <h3 className="text-xl font-bold mb-4">Contact us</h3>
    //       <p className="text-gray-600">
    //         Kementerian Komunikasi dan Digital RI
    //         <br />
    //         Computer Security Incident Response Team (CSIRT) Pusat Data
    //         Nasional.
    //         <br />
    //         <br />
    //         Jl. Medan Mereda Barat No. 9<br />
    //         Jakarta Pusat 10110
    //         <br />
    //         (021) 3504024
    //         <br />
    //         csirt@xxx.go.id
    //         <br />
    //         Mon-Thur: 08:00-16:30
    //         <br />
    //         Fri: 08:00-17:00
    //         <br />
    //       </p>
    //     </div>
    //     <div>
    //       <iframe
    //         class="h-80 lg:h-full md:h-full w-full"
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31733.358327969945!2d106.7842571743164!3d-6.1749432999999945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d47c71fdaf%3A0x56d2a62dc19ddbc9!2sKementerian%20Komunikasi%20dan%20Informatika%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1703482405037!5m2!1sid!2sid"
    //         allowfullscreen=""
    //         loading="lazy"
    //         referrerpolicy="no-referrer-when-downgrade"
    //         style={{ border: 0 }}
    //       ></iframe>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Contact;

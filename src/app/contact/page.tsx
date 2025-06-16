function ContactPage() {
  return (
    <div className="text-gray-600 container flex-1 flex flex-col w-screen justify-around items-start mx-12">
      <h1 className="text-4xl underline font-bold mb-4 text-gray-700">
        Contact Us:
      </h1>
      <div className="flex justify-between items-center w-full text-2xl text-gray-500">
        <div>
          <p>
            Instagram: <span></span>
          </p>
          <p>
            Youtube: <span></span>
          </p>
          <p>
            Facebook: <span></span>
          </p>
        </div>
        <div>
          <p>+0213456464</p>
          <p>+0213456464</p>
          <p>+0213456464</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;

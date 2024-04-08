function Project_Card() {
  return (
    <div className="flex space-x-4 mx-16 border-l-white mt-8">
      <img
        className="rounded w-2/5"
        src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg"
        alt=""
      />
      <div className="flex flex-col gap-y-6 my-auto">
        <div className="text-white  tracking-wide text-3xl">MERN Project</div>
        <div className="text-white  tracking-wide text-purple-200 font-bold text-2xl">
          Plex Garden
        </div>
        <div className="text-white  tracking-wide bg-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          distinctio voluptate itaque nulla nisi nostrum sunt sequi nihil ipsam
          exercitationem optio facere veritatis minima veniam rerum provident,
          tenetur illum, corporis neque, eius illo quasi libero. Expedita
          deleniti non numquam sunt officia dicta eligendi, provident, voluptate
          ratione voluptatibus magni tenetur eius!
        </div>
        <div className="text-white  tracking-wide flex flex-col gap-y-2">
          <div className="tracking-wide text-white opacity-80">
            Reactjs React Router Reduc NodeJS Express MongoDB JWT Multer
          </div>
          <div>
            <div to="#" className="tracking-wide">
              Github
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project_Card;

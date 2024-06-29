function GetInTouch() {
  return (
    <div className="mx-16 flex flex-col gap-y-7 mb-12 bg-black">
      <h1 className="mx-auto">
        <h1 className="text-white tracking-wide text-4xl">Get In Touch</h1>
        <hr className="w-24 border-red-500 mt-2 mx-auto" />
      </h1>
      <div>
        <div className="text-white tracking-wide leading-7 text-lg">
          Are you looking for a fast-performing and user-friendly website to
          represent your product or business?Looking forward for any kind of
          consultation? Any questions? Some feedback for me or just want to say
          . In any case, feel free to let me know. I will do my best to respond
          back. 😊 The quickest way to reach out to me is via an email at
          lohoripal2001@gmail.com.
        </div>
      </div>
      <div className="flex gap-x-4 mx-auto">
        <button className="text-white tracking-wide border-red-500 border-2 hover:bg-red-500 rounded transition-all p-4 hover:scale-90">
          Email Me
        </button>
        <button className="text-white tracking-wide border-red-500 border-2 hover:bg-red-500 rounded transition-all p-4 hover:scale-90">
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default GetInTouch;

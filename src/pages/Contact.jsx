function Contact() {
  let first_word = "text-cyan-500 font-semibold";
  return (
    <>
      <div className="absolute left-[50%] mb-10 translate-x-[-50%] space-y-2 text-left [&>p]:text-2xl">
        {/* contact */}
        <p className="flex flex-col space-x-1 sm:flex-row">
          <div className={first_word}>Phone Number:</div>
          <div
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigator.clipboard.writeText("8618412881");
              alert("Phone number copied to clipboard!");
            }}
          >
            8618412881
          </div>
        </p>
        <p>
          <span className={first_word}>Email:</span>{" "}
          <span
            className="cursor-pointer hover:underline"
            onClick={() => {
              navigator.clipboard.writeText(" adrishpinto423@gmail.com");
              alert("Email copied to clipboard!");
            }}
          >
            adrishpinto423@gmail.com
          </span>
        </p>

        {/* github */}
        <p>
          <span className={first_word}>GitHub:</span>{" "}
          <a
            href="https://github.com/adrishpinto"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            https://github.com/adrishpinto
          </a>
        </p>
        <p className="flex flex-col space-x-1 sm:flex-row">
          <div className={first_word}>Location: </div>
          <div>Bangalore</div>
        </p>
      </div>
    </>
  );
}

export default Contact;

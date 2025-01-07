import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10 md:py-36 px-10 bg-black flex flex-col md:flex-row gap-8 text-gray-400 md:items-center justify-between">
      <div className="flex flex-col gap-8 md:max-w-[50%]">
        <div className="space-y-4">
          <h1 className="header tracking-wider font-semibold text-white">
            Baynedad
          </h1>
          <p className="body_text tracking-wider">
            Baynedad Property Managers - Reliable property and facility
            management solutions. Your property, our priority!
          </p>
        </div>
        <div className="flex gap-20 normal_text">
          <div className="space-y-2 ">
            <p className="tracking-wider">7 Oyapero Street</p>
            <p className="tracking-wider">Area 1 Estate</p>
            <p className="tracking-wider">Alagbado, Lagos</p>
          </div>
          <div className="space-y-2">
            <p className="tracking-wider">Terms of service</p>
            <p className="tracking-wider">Privacy Policy</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 flex flex-col">
        <h1 className="section_title tracking_wide capitalize text-white">
          home
        </h1>
        <Link
          href="/"
          className="normal_text tracking-wide capitalize"
        >
          about
        </Link>
        <Link
          href="/"
          className="normal_text tracking-wide capitalize"
        >
          recent listing
        </Link>
        <Link
          href="/"
          className="normal_text tracking-wide capitalize"
        >
          services
        </Link>
      </div>
      <div className="space-y-2 flex flex-col">
        <h1 className="section_title tracking_wide capitalize text-white">
          company
        </h1>
        <Link
          href="/"
          className="normal_text tracking-wide"
        >
          About us
        </Link>
        <Link
          href="/contact"
          className="normal_text tracking-wide capitalize"
        >
          Contact us
        </Link>
        <Link
          href="/properties"
          className="normal_text tracking-wide capitalize"
        >
          Properties
        </Link>
      </div>
    </div>
  );
};

export default Footer;

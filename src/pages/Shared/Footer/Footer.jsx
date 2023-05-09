import logo from "../../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content rounded-lg">
      <div className="mx-auto md:mx-0">
        <img className="mx-auto md:mx-0" src={logo} alt="" />
        <p className="text-center md:text-left">
          Car Doctor Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div className="mx-auto md:mx-0">
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className="mx-auto md:mx-0">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className="mx-auto md:mx-0">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="social-icons flex space-x-4">
  <a href="https://github.com/Haben7" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
  </a>

  <a href="https://gmail.com/orthodoxawit7@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/google.svg" alt="Twitter" className="w-1/2 h-1/2" />
  </a>

  <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
  </a>

  <a href="https://t.me/miracle_75" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/telegram.svg" alt="Telegram" className="w-1/2 h-1/2" />
  </a>

  <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/linkedin (1).svg" alt="LinkedIn" className="w-1/2 h-1/2" />
  </a>

  <a href="https://www.upwork.com/freelancers/~011f376a9fa2753362" target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src="/assets/upwork.png" alt="Upwork" className="w-1/2 h-1/2" />
  </a>
</div>


      <p className="text-white-500">© 2025 Netsanet Melese. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

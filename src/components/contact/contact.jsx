import "./contact.scss";

export default function Contact() {

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact me :)</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com/leeburnell"> <i class="fas fa-thumbs-up"></i></a>
          <a href="https://www.twitter.com/itsbeeroybtw"> <i class="fas fa-retweet"></i></a>
          <a href="https://www.instagram.com/itsbeeroybtw"> <i class="fas fa-camera"></i></a>
        </div>
      </div>
    </div>
  );
}
import css from './footer.module.css';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import MailIcon from './icons/mail.svg';
import WhatsappIcon from './icons/whatsapp.svg';
import YoutubeIcon from './icons/youtube.svg';

const Footer = () => {
  return (
    <footer className={css.Footer}>

      <div>

        <a href='https://www.facebook.com/bhcircuito'
          rel='noreferrer noopener' target='_blank'>
          <FacebookIcon className={css.Icon} />
        </a>

        <a href='https://instagram.com/circuito_bh/'
          rel='noreferrer noopener' target='_blank'>
          <InstagramIcon className={css.Icon} />
        </a>

        <a href='https://www.youtube.com/channel/UCP2AO8BXKQacuiFFn_Gq_kA'
          rel='noreferrer noopener' target='_blank'>
          <YoutubeIcon className={css.Icon} />
        </a>

      </div>

      <div className={css.Contacts}>

        <a href='mailto:louzadamaite@gmail.com'>louzadamaite@gmail.com</a>
        <MailIcon className={css.Icon} />

        <a href='https://api.whatsapp.com/send?phone=+5531987016193'>(31) 98701-6193</a>
        <WhatsappIcon className={css.Icon} />

      </div>

    </footer>
  );
};

export default Footer;

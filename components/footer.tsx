import css from './footer.module.css';
import FacebookIcon from './icons/facebook.svg';
import InstagramIcon from './icons/instagram.svg';
import MailIcon from './icons/mail.svg';
import WhatsAppIcon from './icons/whatsapp.svg';
import YouTubeIcon from './icons/youtube.svg';

const Footer = () => {
  return (
    <footer className={css.Footer}>

      <div>

        <a href='https://www.facebook.com/bhcircuito'
          rel='noreferrer noopener' target='_blank' title='Página do Facebook'>
          <FacebookIcon className={css.Icon} />
        </a>

        <a href='https://instagram.com/circuito_bh'
          rel='noreferrer noopener' target='_blank' title='Perfil no Instagram'>
          <InstagramIcon className={css.Icon} />
        </a>

        <a href='https://www.youtube.com/@circuitobh2586'
          rel='noreferrer noopener' target='_blank' title='Canal no Youtube'>
          <YouTubeIcon className={css.Icon} />
        </a>

      </div>

      <div className={css.Contacts}>

        <a href='mailto:louzadamaite@gmail.com'>louzadamaite@gmail.com</a>
        <MailIcon className={css.Icon} />

        <a href='https://api.whatsapp.com/send?phone=+5531987016193'>(31) 98701-6193</a>
        <WhatsAppIcon className={css.Icon} />

      </div>

    </footer>
  );
};

export default Footer;

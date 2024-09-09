import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion'; // Importa motion desde framer-motion

const ButtonWhatsapp = ({ whatsappNumber }) => {
  return (
    <WhatsappLink
      href={`https://wa.me/${whatsappNumber}?text=¡Hola!%20Quisiera%20más%20información`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        icon={faWhatsapp}
        whileHover={{
          scale: [1, 1.2, 1],
          transition: { duration: 0.6, repeat: Infinity, repeatType: 'reverse' },
        }}
      />
    </WhatsappLink>
  );
};

export default ButtonWhatsapp;

const WhatsappLink = styled(motion.a)`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: white;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  box-shadow: 2px 2px 3px #999;
`;

export const Icon = styled(motion(FontAwesomeIcon))`
  font-size: 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 40px;
  }
`;

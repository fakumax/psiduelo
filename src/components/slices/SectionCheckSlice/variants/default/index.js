import { PrismicRichText } from '@prismicio/react';
import { Container, DecoImage, SubItem, Wrapper } from './defaultStyles';
import { useState } from 'react';
import { ContentModal, CustomModal } from '@/components/common';

const Default = (slice) => {
  const { image, text, color } = slice.primary;
  const { items } = slice;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setIsModalOpen(true);
    setSelectedItem(item);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Wrapper style={{ backgroundImage: `url(${image.url})` }}>
      {/* Decorative images */}
      <DecoImage src="/svg/flower2.svg" alt="" className="flower2" aria-hidden="true" />
      <DecoImage src="/svg/door.svg" alt="" className="door" aria-hidden="true" />
      <DecoImage src="/svg/gold_splatters.svg" alt="" className="splatter1" aria-hidden="true" />
      <DecoImage src="/svg/gold_splatters.svg" alt="" className="splatter2" aria-hidden="true" />
      <DecoImage src="/svg/gold_splatters.svg" alt="" className="splatter3" aria-hidden="true" />
      
      <Container color={color}>
        <PrismicRichText field={text} />
        <div className="subContainer">
          {items.map((item, index) => (
            <SubItem onClick={() => openModal(item)} key={index}>
              <div className="titleItems">
                <PrismicRichText field={item.title} />
              </div>
              <PrismicRichText field={item.description} />
            </SubItem>
          ))}
          {isModalOpen && (
            <CustomModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              content={<ContentModal data={selectedItem ? selectedItem : undefined} />}
            />
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

export { Default };

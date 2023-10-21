import React, { useState } from 'react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import {
  ContainerItems,
  HeadTitle,
  LeftContainer,
  RightContainer,
  WhiteContainer,
  Wrapper,
} from './defaultStyles';
import { CustomModal } from '@/components/common/Modal';

const Default = (slice, articles) => {
  console.log(slice);
  console.log(articles);

  const { bgcolor, bgleft, titleleft, textleft, descripcionleft, imageleft, textbutton } =
    slice.primary;

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura/cierre del modal
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    <Wrapper color={bgcolor}>
      <LeftContainer>
        <WhiteContainer>
          <div className="ImageLeft">
            <PrismicNextImage field={imageleft} fallbackAlt="" />
          </div>
          <div className="TextLeft">
            <PrismicRichText field={titleleft} />
            <PrismicRichText field={descripcionleft} />
          </div>
          <PrismicNextLink field={textleft}>{textbutton}</PrismicNextLink>
        </WhiteContainer>
        <div className="ImagePaper">
          <PrismicNextImage field={bgleft} fallbackAlt="" />
        </div>
      </LeftContainer>

      <RightContainer>
        {slice.items.map((item, index) => (
          <ContainerItems key={index}>
            <div className="WrapperImage">
              <div className="ImageContainer">
                <PrismicNextImage field={item.image} />
              </div>
            </div>
            <div className="TextContainer">
              <HeadTitle>
                <PrismicRichText field={item.title} key={index} />
                <div className="new1" />
              </HeadTitle>
              <PrismicRichText field={item.description} />
              {/* <PrismicNextLink field={item.linkbutton}>{item.textbutton}</PrismicNextLink> */}

              <button onClick={openModal}>{item.textbutton}</button>

              <CustomModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                content={
                  <div>
                    {selectedItem && (
                      <>
                        <PrismicRichText field={selectedItem.description} />
                        <h2>{selectedItem.textbutton}</h2>
                      </>
                    )}
                  </div>
                }
              />
            </div>
          </ContainerItems>
        ))}
      </RightContainer>
    </Wrapper>
  );
};

export { Default };

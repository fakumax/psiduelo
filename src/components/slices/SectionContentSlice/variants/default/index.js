import React, { useEffect, useState } from 'react';
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
import { ContentModal, CustomModal } from '@/components/common/Modal';
import { fetchArticles } from '@/utils/fetchArticles';

const Default = (slice) => {
  const [articles, setArticles] = useState(null);
  //console.log(slice.items);
  const { bgcolor, bgleft, titleleft, textleft, descripcionleft, imageleft, textbutton } =
    slice.primary;

  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la apertura/cierre del modal
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (uid) => {
    const article = articles.find((article) => article.uid === uid);
    setSelectedItem(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  useEffect(() => {
    const fetchAndSetArticles = async () => {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      console.log(fetchedArticles);
    };

    fetchAndSetArticles();
  }, []);

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
          <button
            onClick={() =>
              openModal('en-alicia-en-el-pais-de-las-maravillas-alicia-le-pregunta')
            }
          >
            {textbutton}
          </button>
        </WhiteContainer>
        <div className="ImagePaper">
          <PrismicNextImage field={bgleft} fallbackAlt="" />
        </div>
      </LeftContainer>

      <RightContainer>
        {slice.items.map((item, index) => {
          const titleText = item.title[0].text;
          return (
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

                <button
                  onClick={() =>
                    openModal(
                      titleText === 'El Duelo Duele'
                        ? 'el-duelo-duele'
                        : 'por-que-es-importante-el-apoyo-psicologico-en-el-duelo'
                    )
                  }
                >
                  {item.textbutton}
                </button>
                <CustomModal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  content={
                    <ContentModal
                      data={selectedItem ? selectedItem.data.slices : undefined}
                    />
                  }
                />
              </div>
            </ContainerItems>
          );
        })}
      </RightContainer>
    </Wrapper>
  );
};

export { Default };

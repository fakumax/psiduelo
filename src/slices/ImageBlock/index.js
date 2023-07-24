/**
 * @typedef {import("@prismicio/client").Content.ImageBlockSlice} ImageBlockSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageBlockSlice>} ImageBlockProps
 * @param {ImageBlockProps}
 */
const ImageBlock = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for image_block (variation: {slice.variation})
      Slices
    </section>
  );
};

export default ImageBlock;

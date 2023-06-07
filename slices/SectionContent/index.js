/**
 * @typedef {import("@prismicio/client").Content.SectionContentSlice} SectionContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionContentSlice>} SectionContentProps
 * @param {SectionContentProps}
 */
const SectionContent = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for section_content (variation: {slice.variation})
      Slices
    </section>
  );
};

export default SectionContent;

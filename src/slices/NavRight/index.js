/**
 * @typedef {import("@prismicio/client").Content.NavRightSlice} NavRightSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavRightSlice>} NavRightProps
 * @param {NavRightProps}
 */
const NavRight = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_right (variation: {slice.variation}) Slices
    </section>
  );
};

export default NavRight;

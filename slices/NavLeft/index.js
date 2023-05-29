/**
 * @typedef {import("@prismicio/client").Content.NavLeftSlice} NavLeftSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NavLeftSlice>} NavLeftProps
 * @param {NavLeftProps}
 */
const NavLeft = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_left (variation: {slice.variation}) Slices
    </section>
  );
};

export default NavLeft;

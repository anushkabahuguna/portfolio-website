const sizes = {
  up(size) {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1199.98px",
      xl: "1600px",
    };
    return `@media (min-width: ${sizes[size]})`;
  },
  down(size) {
    const sizes = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1199.98px",
      xl: "1600px",
    };
    return `@media (max-width: ${sizes[size]})`;
  },
};

export default sizes;

export const colorConverter = (color: string) => {
  switch(color) {
    case 'yellow':
      return '#FEF08A';
    case 'red':
      return '#FECACA'
    case 'purple':
      return '#E9D5FF';
    case 'default':
      return '#E4E4E7';
    case 'blue':
      return '#BFDBFE';
    case 'pink':
      return '#FBCFE8';
    case 'brown':
      return '#FDE68A';
    case 'orange':
      return '#FED7AA';
    case 'gray':
      return '#E5E7EB';
    case 'green':
      return '#BBF7D0';
    default:
      return '#252734';
  };
};

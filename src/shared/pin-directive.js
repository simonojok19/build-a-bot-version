export default {
  bind: (element, binding) => {
    console.log(binding);
    // eslint-disable-next-line no-param-reassign
    element.style.position = 'absolute';
    // eslint-disable-next-line no-param-reassign
    element.style.bottom = '5px';
    // eslint-disable-next-line no-param-reassign
    element.style.right = '5px';
  },
};

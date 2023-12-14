const importAll = (context) => context.keys().map(context);
const imgfigma = importAll(require.context('../../assets/images/Figma/', false, /\.(png|jpe?g|svg)$/));

export default imgfigma;

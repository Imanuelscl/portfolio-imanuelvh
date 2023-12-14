const importAll = (context) => context.keys().map(context);
const imgreactjs = importAll(require.context('../../assets/images/React js/', false, /\.(png|jpe?g|svg)$/));

export default imgreactjs;

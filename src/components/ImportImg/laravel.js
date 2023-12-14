const importAll = (context) => context.keys().map(context);
const imglaravel = importAll(require.context('../../assets/images/Laravel/', false, /\.(png|jpe?g|svg)$/));

export default imglaravel;

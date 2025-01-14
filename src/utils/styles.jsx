export const styles = {
  center: `flex justify-center items-center`,
  row: `flex flex-row`,
  justifyBetween: `flex justify-between`,
  column: `flex flex-col`,
  rowCenter: `flex flex-row justify-center flex-wrap`,
  columnCenter: `flex flex-col justify-center items-center`,
  transformY: `hover:-translate-y-11 transition duration-300 cursor-pointer`,
  zoom: `lg:hover:scale-105 transition duration-300 cursor-pointer`,
  input: `block w-full p-4 h-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`,
  label: `text-sm font-medium text-gray-700 tracking-wide`,
  h1: `text-3xl font-semibold mb-4 text-gray-700 tracking-wide`,
  button: `text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`,
  dropdown: `absolute right-0 mt-2 bg-gray-800 text-white p-2 space-y-2 transition-transform transform translate-x-0 md:translate-x-full flex flex-col z-40`,
  border: `border-none flex justify-center rounded-2xl`,
  borderInside: `border-none rounded-xl shadow-xl`,
  arrowButton: `bg-none border-4 rounded-full hover:bg-gray-300`,
  mainContainer: `rounded-xl bg-white flex flex-col`,
  gridContainer: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4`, // Define a grid com responsividade
  card: `rounded-full bg-white flex flex-wrap justify-center px-6 py-16 gap-4`,
  img: `shadow-[inset_0px_-85px_58px_-47px_rgba(0,0,0,0.69)] rounded-xl bg-cover bg-center h-56 w-64 md:h-56 md:w-64 sm:w-52 sm:h-56 cursor-pointer`,
  cardH1: `font-namePlace font-extrabold text-2xl pb-3 pl-3`,
  formSubmit: `w-full h-72 flex justify-center items-center`
};

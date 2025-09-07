export const Switch = ({ active }) => {
  return (
    <div
      className={`${
        active ? "bg-orange-800" : "bg-gray-600"
      } rounded-2xl w-10 h-fit p-1 cursor-pointer`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full ${
          active ? "translate-x-4" : ""
        }`}
      ></div>
    </div>
  );
};
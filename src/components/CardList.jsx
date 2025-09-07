import { Switch } from "../ui/switch";
import { datos } from "../data/data";
import { useState } from "react";

export const CardList = () => {
  const [filtrar, setFiltrar] = useState("all");

  const data = datos();

  const datofiltrado = data.filter((item) => {
    if (filtrar === "active") return item.isActive === true;
    if (filtrar === "inactive") return item.isActive === false;
    return true;
  });

  return (
    <div className="text-black dark:text-white max-w-5xl w-full mx-auto">
      <div className="flex justify-between items-center mb-5 max-md:flex-col gap-5">
        <h1 className="text-3xl font-bold">Extensions</h1>
        <div className="flex gap-5">
          <button
            onClick={() => setFiltrar("all")}
            className={`px-4 py-1 rounded-3xl border cursor-pointer border-gray-600 ${
              filtrar === "all"
                ? "bg-orange-800 text-white"
                : "bg-white dark:bg-neutral-800"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFiltrar("active")}
            className={`px-4 py-1 rounded-3xl border cursor-pointer border-gray-600 ${
              filtrar === "active"
                ? "bg-orange-800 text-white"
                : "bg-white dark:bg-neutral-800"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFiltrar("inactive")}
            className={`px-4 py-1 rounded-3xl border cursor-pointer border-gray-600 ${
              filtrar === "inactive"
                ? "bg-orange-800 text-white"
                : "bg-white dark:bg-neutral-800"
            }`}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        {datofiltrado?.map((item) => (
          <div
            key={item.name}
            className="shadow-xl dark:shadow-none bg-white border-gray-600 w-xs p-3 flex flex-col gap-5 rounded-xl dark:bg-[#212636ff]"
          >
            <div className="flex  items-center gap-2">
              <img src={item.logo} alt={item.name} />
              <div>
                <h1 className="text-lg font-medium">{item.name}</h1>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <button className="border rounded-xl px-2 py-1 cursor-pointer hover:bg-orange-800 text-xs transition-all duration-200 hover:border-orange-800 hover:text-white">
                Remove
              </button>
              <Switch active={item.isActive} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

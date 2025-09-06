import { Switch } from "../ui/switch";
import { datos } from "../data/data";
import { useState } from "react";

export const CardList = () => {
  const [filtrar, setFiltrar] = useState("all");

  const data = datos();

  const datofiltrado = data.filter((item) => {
    if (filtrar === "active") return item.isActive === true;
    if (filtrar === "inactive") return item.isActive === false;
    return true; // 'all'
  });

  return (
    <div className="text-black dark:text-white max-w-5xl w-full mx-auto">
      <div className="flex justify-between items-center mb-5 max-md:flex-col gap-5">
        <h1 className="text-3xl font-bold">Extensions</h1>
        <div className="flex gap-5">
          <button
            onClick={() => setFiltrar("all")}
            className={`px-3 py-1 rounded ${
              filtrar === "all" ? "bg-blue-200" : "bg-red-500"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFiltrar("active")}
            className={`px-3 py-1 rounded ${
              filtrar === "active" ? "bg-blue-200" : "bg-red-500"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFiltrar("inactive")}
            className={`px-3 py-1 rounded ${
              filtrar === "inactive" ? "bg-blue-200" : "bg-red-500"
            }`}
          >
            Inactive
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap gap-5 justify-center">
        {datofiltrado?.map((item) => (
          <div key={item.name} className="border-2 w-xs p-3 flex flex-col gap-5 rounded-xl">
            <div className="flex  items-center gap-2">
              <img src={item.logo} alt="" />
              <div>
                <h1 className="text-lg font-medium">{item.name}</h1>
                <p className="text-xs">{item.description}</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-auto">
              <button className="border rounded-xl px-2 py-1 cursor-pointer">
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

import { useLoaderData } from "react-router-dom";
import { Edit, Trash } from "lucide-react";
import { apiUrl } from ".";

type Rating = {
  nev: string;
  pontertek: number;
  szorzo: number;
  szempontNev: string;
  végsőPont: number;
};

type LoaderData = {
  ratings: Rating[];
};

export default function Ratings() {
  const { ratings } = useLoaderData() as LoaderData;

  return (
    <section className="flex items-center justify-center p-4">
      <div className="py-2 px-4 border rounded-lg border-gray-400 w-full md:w-8/12 lg:w-1/2">
        <table className="w-full">
          <thead className="text-center border-b border-gray-400">
            <tr>
              <th className="font-normal border-r border-gray-400">Név</th>
              <th className="font-normal border-r border-gray-400">Szempont</th>
              <th className="font-normal border-r border-gray-400">Pontszám</th>
              <th className="font-normal"></th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating) => (
              <tr
                key={`${rating.nev}-${rating.szempontNev}-${rating.pontertek}`}
              >
                <td className="border-r border-gray-400 py-1 px-2 text-center">
                  {rating.nev}
                </td>
                <td className="border-r border-gray-400 py-1 px-2">
                  {rating.szempontNev}
                </td>
                <td className="border-r border-gray-400 py-1 px-2 text-center">
                  {rating.pontertek}
                </td>
                <td className="py-1 px-2 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2">
                  <Edit className="w-4 h-4 text-blue-500 cursor-pointer" />
                  <Trash className="w-4 h-4 text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export async function loader({}): Promise<LoaderData> {
  return {
    ratings: await fetch(`${apiUrl}/Getter`).then((res) => res.json()),
  };
}

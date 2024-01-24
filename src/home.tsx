import { useLoaderData } from "react-router-dom";
import { apiUrl } from ".";

type Rating = {
  nev: string;
  végsőPont1: number;
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
              <th className="font-normal">Végső pontszám</th>
            </tr>
          </thead>
          <tbody>
            {ratings.map((rating) => (
              <tr key={`${rating.nev}-${rating.végsőPont1}`}>
                <td className="border-r border-gray-400 py-1 px-2 text-center">
                  {rating.nev}
                </td>
                <td className="py-1 px-2 text-center">{rating.végsőPont1}</td>
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
    ratings: await fetch(`${apiUrl}/Végsőpont`).then((res) => res.json()),
  };
}

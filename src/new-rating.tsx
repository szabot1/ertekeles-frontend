import { useLoaderData } from "react-router-dom";
import { apiUrl } from ".";

type Teacher = {
  id: number;
  nev: string;
};

type Category = {
  id: number;
  szempontNev: string;
  szorzo: number;
};

type LoaderData = {
  teachers: Teacher[];
  categories: Category[];
};

export default function NewRating() {
  const { teachers, categories } = useLoaderData() as LoaderData;

  return (
    <section className="flex items-center justify-center p-4">
      <div className="py-2 px-4 border rounded-lg border-gray-400 w-full md:w-8/12 lg:w-1/2">
        <h1 className="mb-4">Új értékelés</h1>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name">Név</label>
            <select
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-lg"
            >
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.id}>
                  {teacher.nev}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="category">Szempont</label>
            <select
              id="category"
              name="category"
              className="w-full px-3 py-2 rounded-lg"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.szempontNev}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="rating">
              Értékelés: <output>1</output>
            </label>
            <input
              id="rating"
              name="ratng"
              type="range"
              min="1"
              max="6"
              step="1"
              defaultValue="1"
              onChange={(e) => {
                const output = document.querySelector(
                  "output"
                ) as HTMLOutputElement;
                output.value = e.target.value;
              }}
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 hover:text-gray-100 transition-colors"
          >
            Mentés
          </button>
        </form>
      </div>
    </section>
  );
}

export async function loader({}) {
  const teachers = await fetch(`${apiUrl}/Screening`).then((res) => res.json());
  const categories = await fetch(`${apiUrl}/Szempont`).then((res) =>
    res.json()
  );

  return {
    teachers,
    categories,
  };
}

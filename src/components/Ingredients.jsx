export default function Ingredients() {
  return (
    <div className="flex flex-col items-start gap-6">
      <h2 className="text-brown-800 font-young-serif text-[1.75rem] not-italic font-normal leading-none">
        Ingredients
      </h2>
      <ul className="flex items-start flex-col gap-2 list-disc list-inside marker:text-brown-800">
        <li className="pl-2 font-outfit text-stone-600 text-base font-normal leading-normal">
          Salt, to taste
        </li>
        <li className="pl-2 font-outfit text-stone-600 text-base font-normal leading-normal">
          Pepper, to taste
        </li>
        <li className="pl-2 font-outfit text-stone-600 text-base font-normal leading-normal">
          2-3 large eggs
        </li>
        <li className="pl-2 font-outfit text-stone-600 text-base font-normal leading-normal">
          1 tablespoon of butter or oil
        </li>
        <li className="pl-2 font-outfit text-stone-600 text-base font-normal leading-normal">
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
    </div>
  );
}

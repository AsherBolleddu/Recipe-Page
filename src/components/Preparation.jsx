export default function Preparation() {
  return (
    <div className="bg-rose-50 flex flex-col gap-4 p-6 rounded-xl items-start">
      <h3 className="text-rose-800 font-outfit text-xl not-italic font-semibold leading-none">
        Preparation time
      </h3>
      <ul className="flex items-start flex-col gap-2 list-disc list-inside marker:text-rose-800">
        <li className="text-stone-600 font-outfit font-normal text-base leading-normal not-italic pl-2">
          <span className="font-outfit text-stone-600 font-bold text-base leading-normal not-italic">
            Total
          </span>
          : Approximately 10 minutes
        </li>
        <li className="text-stone-600 font-outfit font-normal text-base leading-normal not-italic pl-2">
          <span className="font-outfit text-stone-600 font-bold text-base leading-normal not-italic ">
            Preparation
          </span>
          : 5 minutes
        </li>
        <li className="text-stone-600 font-outfit font-normal text-base leading-normal not-italic pl-2">
          <span className="font-outfit text-stone-600 font-bold text-base leading-normal not-italic">
            Cooking
          </span>
          : 5 minutes
        </li>
      </ul>
    </div>
  );
}

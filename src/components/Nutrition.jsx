export default function Nutrition() {
  return (
    <div className="flex flex-col items-start gap-6">
      <h2 className="text-brown-800 font-young-serif text-[1.75rem] not-italic font-normal leading-none">
        Nutrition
      </h2>
      <p className="text-stone-600 font-outfit text-base font-normal not-italic leading-normal">
        The table below shows the nutritional values per serving without the
        additional fillings.
      </p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full">
        <div className="text-stone-600 font-outfit text-base not-italic font-normal leading-normal pl-8">
          Calories
        </div>
        <div className="text-brown-800 font-outfit text-base not-italic font-bold leading-normal pr-8">
          277kCal
        </div>

        <hr className="col-span-full border-t-stone-150" />

        <div className="text-stone-600 font-outfit text-base not-italic font-normal leading-normal pl-8">
          Carbs
        </div>
        <div className="text-brown-800 font-outfit text-base not-italic font-bold leading-normal pr-8">
          0g
        </div>

        <hr className="border-t-stone-150 col-span-full" />

        <div className="text-stone-600 font-outfit text-base not-italic font-normal leading-normal pl-8">
          Protein
        </div>
        <div className="text-brown-800 font-outfit text-base not-italic font-bold leading-normal pr-8">
          20g
        </div>

        <hr className="border-t-stone-150 col-span-full" />

        <div className="text-stone-600 font-outfit text-base not-italic font-normal leading-normal pl-8">
          Fat
        </div>
        <div className="text-brown-800 font-outfit text-base not-italic font-bold leading-normal pr-8">
          22g
        </div>
      </div>
    </div>
  );
}

export default function Instructions() {
  return (
    <div className="flex flex-col items-start gap-6">
      <h2 className="text-brown-800 font-young-serif text-[1.75rem] not-italic font-normal leading-none">
        Instructions
      </h2>
      <ol className="flex flex-col gap-2 list-decimal list-outside pl-6 marker:text-brown-800 marker:font-outfit marker:text-base marker:font-bold marker:not-italic marker:leading-normal">
        <li className="p-2 text-stone-600 font-outfit text-base not-italic font-normal leading-normal">
          <span className="text-stone-600 font-outfit text-base not-italic font-bold leading-normal">
            Beat the eggs:
          </span>{" "}
          In a bowl, beat the eggs with a pinch of salt and pepper until they
          are well mixed. You can add a tablespoon of water or milk for a
          fluffier texture.
        </li>
        <li className="p-2 text-stone-600 font-outfit text-base not-italic font-normal leading-normal">
          <span className="text-stone-600 font-outfit text-base not-italic font-bold leading-normal">
            Heat the pan:
          </span>{" "}
          Place a non-stick frying pan over medium heat and add butter or oil.
        </li>
        <li className="p-2 text-stone-600 font-outfit text-base not-italic font-normal leading-normal">
          <span className="text-stone-600 font-outfit text-base not-italic font-bold leading-normal">
            Cook the omelette:
          </span>{" "}
          Once the butter is melted and bubbling, pour in the eggs. Tilt the pan
          to ensure the eggs evenly coat the surface.
        </li>
        <li className="p-2 text-stone-600 font-outfit text-base not-italic font-normal leading-normal">
          <span className="text-stone-600 font-outfit text-base not-italic font-bold leading-normal">
            Add fillings (optional):
          </span>{" "}
          When the eggs begin to set at the edges but are still slightly runny
          in the middle, sprinkle your chosen fillings over one half of the
          omelette.
        </li>
        <li className="p-2 text-stone-600 font-outfit text-base not-italic font-normal leading-normal">
          <span className="text-stone-600 font-outfit text-base not-italic font-bold leading-normal">
            Fold and serve:
          </span>{" "}
          As the omelette continues to cook, carefully lift one edge and fold it
          over the fillings. Let it cook for another minute, then slide it onto
          a plate.
        </li>
        <li className="p-2 text-stone-600 font-outfit text-base not-italic font-normal leading-normal">
          <span>Enjoy:</span> Serve hot, with additional salt and pepper if
          needed.
        </li>
      </ol>
    </div>
  );
}

import omelette from "../assets/image-omelette.jpeg";

export default function Header() {
  return (
    <header className="h-[171px] md:h-[300px] -mx-10 -mt-8 md:mx-0 md:mt-0">
      <img
        src={omelette}
        alt="Omelette"
        className="w-full h-full object-cover md:rounded-xl"
      />
    </header>
  );
}

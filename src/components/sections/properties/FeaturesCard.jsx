const FeaturesCard = ({text}) => {
  return (
    <div className="p-3 rounded-xl bg-white border text-base shadow-md font-normal tracking-wide hover:text-[#BC986B] hover:-translate-y-1 cursor-pointer duration-300">
      {text}
    </div>
  );
}

export default FeaturesCard
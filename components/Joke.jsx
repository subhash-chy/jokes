function Joke(props) {
  const { id, setup, punchline, type } = props;
  return (
    <div>
      <div className="bg-[#663F6C] px-5 md:px-8 py-2 rounded-t-md text-right">
        <p className="text-xs text-[#C900EC]">_id: {id}</p>
      </div>
      <div className="bg-[#422B46] p-5 md:px-8 rounded-b-md">
        <h1 className="mb-3 text-[#C900EC] font-semibold text-xl">{setup}</h1>
        <p className="text-[#cccccc] mb-5 leading-tight">{punchline}</p>
        <p className="text-[#C900EC] text-sm">{type}</p>
      </div>
    </div>
  );
}

export default Joke;

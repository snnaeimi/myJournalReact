export default function Card(props) {
  return (
    <div className="flex bg-white rounded-lg shadow-md mb-6 p-4">
      <img
        className="w-[125px] h-[168px] rounded-md object-cover mr-4"
        src={props.image}
        alt="an image of journal"
      />
      <div className="flex-grow">
        <div className="text-sm text-gray-500 mb-1">
          <span className="font-semibold">{props.location}</span> •{" "}
          <span className="text-[#F55A5A] cursor-pointer hover:underline">
            {props.map}
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">{props.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{props.date}</p>
        <p className="text-gray-600">{props.description}</p>
      </div>
    </div>
  );
}

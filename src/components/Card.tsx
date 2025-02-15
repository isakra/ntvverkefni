const Card = ({ title, description }: { title: string; description: string }) => {
    return (
      <div className="border p-4 shadow-md rounded-lg m-4 bg-white">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default Card;
  

const Button = ({name}) => {
    return (
        <div className="flex pb-6  justify-center">
           <button className="border-b-2 hover:bg-black hover:text-white uppercase border-black px-5 py-2 rounded-lg">{name}</button>
           </div>
    );
};

export default Button;

const HeadingTitle = ({ subHeading, heading}) => {
    
    return (
        <div className="max-w-md m-auto text-center my-5">
            <p className="text-xl my-3 italic text-[#D99904]">---{subHeading}---</p>
            <h3 className="text-4xl border-y-4 py-3 ">{heading}</h3>
        </div>
    );
};

export default HeadingTitle;
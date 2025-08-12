import CompanyImage from "../assets/Company.png";
import CompanyImg from "../assets/Company2.png";

const Company = () => {
  return (
    <div className="max-full mx-auto py-12 px-4">
      <div className="flex flex-col items-center mb-8">
        <img
          src={CompanyImage}
          alt="Company"
          className="w-full h-[650px] object-cover rounded-lg mb-8"
        />
        <img
            src={CompanyImg}   
            alt="Company"
            className="w-full h-[2200px] object-cover rounded-lg mb-8"
        />
      </div>
    </div>
  );
};

export default Company;

import { Link } from "react-router-dom";

const Instructions = () => {
  return (
    <>
      <div className="w-full h-screen px-10 py-5 mt-auto bg-[#FFD7C4] flex flex-col items-center justify-center">
        <h1 className="mb-5 text-xl font-bold uppercase">Instructions</h1>
        <ul className="flex flex-col items-start justify-center gap-3 list-disc">
          <li className="">
            <span className="font-bold">Input Fields: </span>
            Each field is important to choose.
          </li>
          <li className="">
            <span className="font-bold">Amount: </span>
            The entered number of questions should be below or equal to 50
          </li>
          <li className="">
            <span className="font-bold">Cateogries: </span>
            The selected category may or may not have data. So you might want to
            change it.
          </li>
          <li className="font-bold">
            <span className="font-bold">Enjoy: </span>
            Quiz time! Good luck!
          </li>
        </ul>
        <Link
          to={"/home"}
          className={`font-semibold text-lg p-2 rounded-md shadow-md uppercase text-white bg-teal-400 mt-10`}
        >
          Next
        </Link>
      </div>
    </>
  );
};

export default Instructions;

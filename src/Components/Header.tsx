import React from "react";


interface TotalValueInterface {
  totalIncome: number;
  totalExpense: number;
  year: string;
  month: string;
  setMonth: (e: string) => void;
  setYear: (e: string) => void;
}

export default function Header({
  totalIncome,
  totalExpense,
  month,
  setMonth,
  year,
  setYear,
}: TotalValueInterface) {
  return (
    <div className="text-3xl font-bold bg-pink-950 h-[300px] flex flex-col justify-center items-center">
      <div className="mt-[20px]">
        <h4 className="text-white text-[30px]">
          Available Budget is : {totalIncome - totalExpense}
        </h4>
      </div>
      <div className=" bg-sky-600 h-[50px] text-white mt-[30px] p-[10px] w-[20%]">
        <span className="inline-block float-left">INCOME</span>
        <span className="inline-block  float-right"> + {totalIncome}</span>
      </div>
      <div className=" bg-orange-700 h-[50px] mt-[20px] text-white p-[10px] w-[20%]">
        <span className="inline-block float-left ">EXPENSES</span>
        <span className="inline-block float-right"> - {totalExpense}</span>
      </div>
      <div className="col-span-1 text-[20px] ">
        <select
          value={month}
          className="py-[10px] px-[10px] mt-[10px]"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="Select">Select Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select
          value={year}
          className="py-[10px] px-[10px] mt-[10px] ml-[10px]"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="Select">Select Year</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

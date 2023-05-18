import React from "react";

interface BudgetInterface {
  description?: string;
  amount?: number;
  type?: string;
  month?: string;
  year?: string;
}



interface ArrBudgetInterface extends Array<BudgetInterface> {}

interface PropInterface {
  filterallExpenses: ArrBudgetInterface;
  filterallIncome: ArrBudgetInterface;
  isFilterFlag: Boolean
}


export default function DisplayList({
  filterallIncome,
  filterallExpenses,
  isFilterFlag,
}: PropInterface) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className=" px-[50px] py-[50px] mt-[30px] mx-auto">
        <table className=" flex-left text-gray-500 dark:text-gray-400 ">
          <thead className=" text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-4xl">
                INCOME
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
          
            {filterallIncome.length > 0 &&
              filterallIncome.map((income) => {
                return (
                  <tr className="text-3xl bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {income.description}
                    </th>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4">+{income.amount}</td>
                    {/* <td className="px-6 py-4">{income.month}</td>
                    <td className="px-6 py-4">{income.year}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className=" px-[50px] py-[50px] mt-[30px] ml-[50px] mx-auto">
        <table className="w-[40px] text-xl flex-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xl text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-red-800 text-4xl">
                EXPENSES
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
           
            {filterallExpenses.length > 0 &&
              filterallExpenses.map((expense) => {
                return (
                  <tr className="text-3xl bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-large text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {expense.description}
                    </th>
                    <td className="px-6 py-4 "></td>
                    <td className="px-6 py-4 text-red-800">
                      -{expense.amount}
                    </td>
                    {/* <td className="px-6 py-4 ">{expense.month}</td>
                    <td className="px-6 py-4">{expense.year}</td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

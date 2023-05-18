import React, { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import DisplayList from "./DisplayList";
import Header from "./Header";
import { SelectChangeEventHandler } from "../Types";


interface BudgetInterface {
  description?: string;
  amount?: number;
  type?: string;
  month?: string;
  year?: string;
}

interface ArrBudgetInterface extends Array<BudgetInterface> {}

interface ObjBudget {
  [key: string]: BudgetInterface[];
}
export default function BudgetForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [type, setType] = useState("");
  const [month, setMonth] = useState("May");
  const [year, setYear] = useState("2023");
  const [allIncome, setAllIncome] = useState<ObjBudget>({});
  const [allExpenses, setAllExpenses] = useState<ObjBudget>({});
  const [filterallIncome, setFilterAllIncome] = useState<ArrBudgetInterface>([]);
  const [filterallExpenses, setFilterAllExpenses] = useState<ArrBudgetInterface>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpense, setTotalExpense] = useState<number>(0);
  const [isFilterFlag, setIsFilterFlag] = useState<boolean>(false);

  const saveHandler = () => {
    setIsFilterFlag(false);
    if (type === "Income") {
      const allIncomeObj = {...allIncome};
      if (allIncomeObj[`${month}${year}`] !== undefined) {
        allIncomeObj[`${month}${year}`].push({
          description,
          amount,
          type,
        });
      } else {
        allIncomeObj[`${month}${year}`] = []
        allIncomeObj[`${month}${year}`].push({
          description,
          amount,
          type,
        });
      }
        // arr.push({ description, amount, type, month, year });
      setAllIncome(allIncomeObj);
      localStorage.setItem("Income", JSON.stringify(allIncomeObj));
    } else if (type === "Expenses") {
      const allExpenseObj = {...allExpenses};
      if (allExpenseObj[`${month}${year}`] !== undefined) {
        allExpenseObj[`${month}${year}`].push({
          description,
          amount,
          type,
        });
      } else {
        allExpenseObj[`${month}${year}`] = [];
        allExpenseObj[`${month}${year}`].push({
          description,
          amount,
          type,
        });
      }
      setAllExpenses(allExpenseObj);
      localStorage.setItem("Expense", JSON.stringify(allExpenseObj));
    }
  };

 

  useEffect(() => {
    if (localStorage.getItem("Income")) {
      setAllIncome(JSON.parse(localStorage.getItem("Income") || "{}"));
    }
    if (localStorage.getItem("Expense")) {
      setAllExpenses(JSON.parse(localStorage.getItem("Expense") || "{}"));
    }
  }, []);

  useEffect(() => {
      let incomeTotal = allIncome[`${month}${year}`]?.reduce(
        (accum, currentvalue) => {
          return (accum += currentvalue.amount || 0);
        },
        0
      );
      const filterallIncomeArr = allIncome[`${month}${year}`] || [];
      setFilterAllIncome(filterallIncomeArr);
      setTotalIncome(incomeTotal);
    
  }, [allIncome, year, month]);

  useEffect(() => {
    let expenseTotal = allExpenses[`${month}${year}`]?.reduce(
      (accum, currentvalue) => {
        return (accum += currentvalue.amount || 0);
      },
      0
    );
    const filterallExpensesArr = allExpenses[`${month}${year}`] || [];
    setFilterAllExpenses(filterallExpensesArr);
    setTotalExpense(expenseTotal);
  }, [allExpenses, year, month]);

  return (
    <>
      <Header
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <div className="w-full h-[80px] bg-slate-400 grid grid-cols-4">
        <div className="col-span-1 text-[20px]">
          <select
            onChange={(e) => setType(e.target.value)}
            className="py-[10px] px-[10px] mt-[10px]
"
          >
            <option value="Select">Select</option>
            <option value="Income">Income</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>

        <div className=" relative col-span-1 ">
          <input
            type="text"
            id="rounded-description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className=" w-[100%] text-[20px] rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-[10px] px-[10px] mt-[10px] bg-white text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Enter Description"
          />
        </div>

        <div className="col-span-1 text-[20px] inline-block">
          <input
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            type="number"
            id="rounded-value"
            className=" w-[30%] text-[20px] rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-[10px] px-[10px] mt-[10px] bg-white text-gray-700 placeholder-gray-400 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Value"
          />
        </div>
        <div className="col-span-1 text-[20px] ">
          <span
            className=" inline-block py-[10px] px-[10px] mt-[10px]"
            onClick={() => saveHandler()}
          >
            <MdCheckCircle className="inline-block text-[30px] text-red-950" />
          </span>
        </div>
      </div>
      <DisplayList
        filterallIncome={filterallIncome}
        filterallExpenses={filterallExpenses}
        isFilterFlag={isFilterFlag}
      />
    </>
  );
}

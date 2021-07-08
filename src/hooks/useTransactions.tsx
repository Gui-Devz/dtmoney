import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";

import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createNewTransaction(transactionInput: TransactionInput) {
    const response = await api.post("transactions", transactionInput);

    const newTransaction = response.data.transaction;
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}

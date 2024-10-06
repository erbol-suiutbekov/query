"use client";
import { FC, ReactNode } from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "@/redux/api";
interface iProvider {
  children: ReactNode;
}
const ReduxProvider: FC<iProvider> = ({ children }) => {
  return (
    <div>
      <ApiProvider api={api}>{children}</ApiProvider>
    </div>
  );
};

export default ReduxProvider;

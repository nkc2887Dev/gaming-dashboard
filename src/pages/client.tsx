import AddClient from "@/components/client/addClient";
import ClientList from "@/components/client/clientList";
import { useState } from "react";

export default function client() {
  const [page, setPage] = useState<"clientList" | "addClient">("clientList");

  return (
    <>
      {page === "clientList" ? (
        <ClientList setPage={setPage} />
      ) : (
        <AddClient setPage={setPage} />
      )}
    </>
  );
}

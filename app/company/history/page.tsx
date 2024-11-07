import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { historyItems } from "./historyItems";

const History = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="ml-2 text-xl font-bold text-foreground border-l-4 border-sky-600 pl-2">沿革</h1>
      </div>
      <div className="flex h-screen">
        <Table>
          <TableBody>
            {historyItems.map((historyItem) => (
              <TableRow key={historyItem.name}>
                <TableCell className="font-medium">{historyItem.name}</TableCell>
                <TableCell>{historyItem.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    
  );
}

export default History;

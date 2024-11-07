import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { historyItems } from "./historyItems";
import Heading from "@/components/layouts/heading/heading";

const History = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="沿革" />
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

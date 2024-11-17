import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { historyItems } from "./historyItems";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";

const History = () => {
  return (
    <Body>
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
    </Body>
    
  );
}

export default History;

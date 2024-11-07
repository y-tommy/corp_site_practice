import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react"
import { tableItems } from "./tableItems";
import Heading from "@/components/layouts/heading/heading";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
      <Heading title="会社概要" />
      <div className="flex h-screen">
        <Table>
          <TableBody>
            {tableItems.map((tableItem) => (
              <TableRow key={tableItem.name}>
                <TableCell className="font-medium">{tableItem.name}</TableCell>
                <TableCell>{tableItem.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
    
  );
}

export default About;

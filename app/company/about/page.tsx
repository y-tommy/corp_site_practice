import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react"
import { tableItems } from "./tableItems";
import Heading from "@/components/layouts/heading/heading";
import Body from "@/components/layouts/body/body";
import CorpMap from "@/components/layouts/map/map";

const About = () => {
  return (
    <Body>
      <Heading title="会社概要" />
      <div className="flex">
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
      <CorpMap />
    </Body>
    
  );
}

export default About;

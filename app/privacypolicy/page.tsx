import Heading from "@/components/layouts/heading/heading";
import React from "react";
import { policyItems } from "./policyItems";
import Body from "@/components/layouts/body/body";

const PrivacyPolicy = () => {
  return (
    <Body>
      <Heading title="プライバシーポリシー" />
      <table className="container mx-auto">
        <thead className="">
          <tr className="bg-gray-200">
            <th className="py-10 border">個人情報の種類</th>
            <th className="py-10 border">利用目的</th>
          </tr>
        </thead>
        <tbody className="container">
          {policyItems.map((policy) => (
            <tr key={policy.policyType} className="">
              <td className="py-10 border text-center">{policy.policyType}</td>
              <td className="py-10 border">
                <ul className="list-disc list-inside">
                  {policy.policyPurpose.map((purpose) => (
                    <li key={purpose} className="text-left ml-12 mb-2">{purpose}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Body>
  );
}

export default PrivacyPolicy;

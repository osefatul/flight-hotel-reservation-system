import React from "react";
import "./widgetLarge.css";

function WidgetLarge() {

  
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };



  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://qph.fs.quoracdn.net/main-qimg-cebbc5f4664800cb05eccace997e1010"
              alt=""
            />
            <span className="widgetLargeName">King Khan</span>
          </td>
          <td className="widgetLargeDate">2th Jan 20222</td>
          <td className="widgetLargeAmount">$1225.9</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://qph.fs.quoracdn.net/main-qimg-cebbc5f4664800cb05eccace997e1010"
              alt=""
            />
            <span className="widgetLargeName">King Khan</span>
          </td>
          <td className="widgetLargeDate">2th Jan 20222</td>
          <td className="widgetLargeAmount">$1225.9</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://qph.fs.quoracdn.net/main-qimg-cebbc5f4664800cb05eccace997e1010"
              alt=""
            />
            <span className="widgetLargeName">King Khan</span>
          </td>
          <td className="widgetLargeDate">2th Jan 20222</td>
          <td className="widgetLargeAmount">$1225.9</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
            <img
              className="widgetLargeImage"
              src="https://qph.fs.quoracdn.net/main-qimg-cebbc5f4664800cb05eccace997e1010"
              alt=""
            />
            <span className="widgetLargeName">King Khan</span>
          </td>
          <td className="widgetLargeDate">2th Jan 20222</td>
          <td className="widgetLargeAmount">$1225.9</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLarge;

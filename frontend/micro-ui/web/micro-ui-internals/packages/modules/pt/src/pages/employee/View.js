import React from "react";
import { withRouter } from "react-router-dom";
const cardStyle = {
  width: "100%",
  padding: "1rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "0.5rem",
  textAlign: "center", // Center text
};
const h2Style = {
  fontSize: "1.125rem", // 18px
  fontWeight: "600",
  marginBottom: "0.5rem",
};
const PtView = ({ location }) => {
  const row = location?.state?.row;
  // Check if row is available
  console.log(row, " rrrrrrrrrrrrrrrrrr");
  if (!row) {
    return (
      <div className="text-center mt-8">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }
  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2 style={h2Style}>Property Details</h2>
          <ul>
            <li>
              <strong>Account Id: </strong>
              {row.accountId}
            </li>
            <li>
              <strong>Acknowldgement Number: </strong>
              {row.acknowldgementNumber}
            </li>
            <li>
              <strong>Land Area: </strong>
              {row.landArea}
            </li>
            <li>
              <strong>No Of Floors: </strong>
              {row.noOfFloors}
            </li>
          </ul>
        </div>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2 style={h2Style}>Property Address</h2>
          <ul>
            <li>
              <strong>City: </strong>
              {row.address.city}
            </li>
            <li>
              <strong>Street: </strong>
              {row.address.street}
            </li>
            <li>
              <strong>Boundary Type: </strong>
              {row.address.boundaryType}
            </li>
            <li>
              <strong>Boundary Code: </strong>
              {row.address.boundaryCode}
            </li>
          </ul>
        </div>
        <div style={{ ...cardStyle, textAlign: "center" }}>
          <h2 style={h2Style}>Owners Details</h2>
          <ul>
            <li>
              <strong>Contact Name: </strong>
              {row.owners[0].name}
            </li>
            <li>
              <strong>Contact Mobile Number: </strong>
              {row.owners[0].mobileNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default withRouter(PtView);

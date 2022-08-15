import React from "react";

function BTable(props) {
  const { headers, data } = props;
  const mapHeaders = (header, index) => {
    return <th key={index}> {header.label}</th>;
  };
  const mapData = (item, index) => {
    return (
      <tr key={index}>
        {headers.map((header, subIndex) => (
          <th key={subIndex}>{item[header.field]}</th>
        ))}
      </tr>
    );
  };
  return (
    <table className="table">
      <thead>
        <tr>{headers && headers.map(mapHeaders)}</tr>
      </thead>
      <tbody>{data && data.map(mapData)}</tbody>
    </table>
  );
}

export default BTable;

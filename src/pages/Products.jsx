import React, { useEffect, useState } from "react";
import { getProducts } from "../services/productsService";
import BTable from "../components/BTable";
import { kaReducer, Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";

function Products() {
  const [productsList, setProductList] = useState([]);
  const [tableProps, setTableProps] = useState({
    columns: [
      {
        key: "name",
        title: "Name",
        dataType: DataType.String,
      },
    ],
    data: productsList,
    editMode: EditingMode.None,
    rowKeyField: "id",
    sortingMode: SortingMode.Single,
  });

  const dispatch = (action) => {
    setTableProps((prevState) => kaReducer(prevState, action));
  };

  useEffect(() => {
    if (!productsList.length) {
      getProducts().then((data) => {
        setProductList(data);
        setTableProps({ data, ...tableProps });
      });
    }
  }, [setProductList, productsList, setTableProps, tableProps]);

  return (
    <div className="columns">
      <h1>Products</h1>
      <div className="column">
        <Table {...tableProps} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Products;

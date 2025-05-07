import React, { useState } from "react";

export const EmployeeTable = ({ data = [] }) => {
  const [rows, setRows] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  const handleRowsChange = (e) => {
    setRows(Number(e.target.value));
    setCurrentPage(1);
  };

  const filteredEmployees = data?.filter((employee) => {
    const searchString = searchValue.toLowerCase();
    return Object.values(employee).some((value) =>
      String(value).toLowerCase().includes(searchString)
    );
  });

  const totalPages = Math.ceil((filteredEmployees?.length || 0) / rows);
  const startIndex = (currentPage - 1) * rows;
  const endIndex = startIndex + rows;
  const displayedEmployees = filteredEmployees?.slice(startIndex, endIndex) || [];

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="employee__table-wrapper" id="employee-table_wrapper">
      <h2 className="employee__title">Current Employees</h2>
      <div className="employee__table-header">
        <div className="employee__length" id="employee-table_length">
          <label htmlFor="employee-table_length" className="employee__length-label">
            Show
            <select
              name="employee-table_length"
              aria-controls="employee-table"
              className="employee__length-select"
              value={rows}
              onChange={handleRowsChange}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            entries
          </label>
        </div>
        <div className="employee__filter" id="employee-table_filter">
          <label htmlFor="employee-table_filter" className="employee__filter-label">
            Search:
            <input
              type="search"
              aria-controls="employee-table"
              className="employee__filter-input"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                setCurrentPage(1);
              }}
            />
          </label>
        </div>
      </div>
      <table
        id="employee-table"
        className="employee__table display dataTable no-footer"
        role="grid"
        aria-describedby="employee-table_info"
      >
        <thead className="employee__table-head">
          <tr className="employee__table-row">
            <th scope="col" className="employee__table-header-cell">
              First Name
            </th>
            <th scope="col" className="employee__table-header-cell">
              Last Name
            </th>
            <th scope="col" className="employee__table-header-cell">
              Start Date
            </th>
            <th scope="col" className="employee__table-header-cell">
              Department
            </th>
            <th scope="col" className="employee__table-header-cell">
              Date of Birth
            </th>
            <th scope="col" className="employee__table-header-cell">
              Street
            </th>
            <th scope="col" className="employee__table-header-cell">
              City
            </th>
            <th scope="col" className="employee__table-header-cell">
              State
            </th>
            <th scope="col" className="employee__table-header-cell">
              Zip Code
            </th>
          </tr>
        </thead>
        <tbody className="employee__table-body">
          {displayedEmployees.map((employee, index) => (
            <tr key={index} className="employee__table-row">
              <td className="employee__table-cell">{employee.firstName}</td>
              <td className="employee__table-cell">{employee.lastName}</td>
              <td className="employee__table-cell">{employee.startDate}</td>
              <td className="employee__table-cell">{employee.department}</td>
              <td className="employee__table-cell">{employee.dateOfBirth}</td>
              <td className="employee__table-cell">{employee.street}</td>
              <td className="employee__table-cell">{employee.city}</td>
              <td className="employee__table-cell">{employee.state}</td>
              <td className="employee__table-cell">{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="employee__info" id="employee-table_info" role="status" aria-live="polite">
        Showing {displayedEmployees.length} of {filteredEmployees?.length || 0} entries
      </div>
      <div className="employee__paginate paging_simple_numbers" id="employee-table_paginate">
        <button
          className="paginate_button previous employee__paginate-button employee__paginate-button--previous"
          aria-controls="employee-table"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="employee__paginate-pages">
          <button
            className="paginate_button current employee__paginate-button employee__paginate-button--current"
            aria-controls="employee-table"
          >
            {currentPage}
          </button>
        </span>
        <button
          className="paginate_button next employee__paginate-button employee__paginate-button--next"
          aria-controls="employee-table"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

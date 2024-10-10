import React from "react";
import './ReportsLayout.css'; // Aquí puedes definir los estilos adicionales

function ReportsLayout() {
  // Datos simulados para la tabla de reportes
  const reports = [
    { id: 1, doctorName: "Dr. John Doe", specialty: "Cardiology" },
    { id: 2, doctorName: "Dr. Jane Smith", specialty: "Dermatology" },
  ];

  const pdfUrl = '/patient-report.pdf'

  return (
    <div className="reports-container">
      <h1>Reports</h1>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>View Report</th>
            <th>Download Report</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={report.id}>
              <td>{index + 1}</td>
              <td>{report.doctorName}</td>
              <td>{report.specialty}</td>
              <td>
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <button>View Report</button>
              </a>             
               </td>
              <td>
              <a href={pdfUrl} download="patient-report.pdf">
                <button>Download Report</button>
              </a>              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportsLayout;

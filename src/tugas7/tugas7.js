import React from "react";

function Tugas7(props) {
  return (
    <div className="box">
      <h1>Data diri peserta kelas Reactjs</h1>
      <hr />
      <ul>
        <li><b>Nama Lengkap:</b> {props.name}</li>
        <li><b>Kelas:</b> {props.kelas}</li>
        <li><b>Email:</b> {props.email}</li>
      </ul>
    </div>
  );
}

export default Tugas7;
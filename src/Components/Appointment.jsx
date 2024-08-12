import React from "react";
import { RiArrowDownSLine } from "@remixicon/react";

const Appointment = () => {
  return (
    <div>
      <section className="appointment section">
        <div className="container mx-auto">
          <h2 className="appoinment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left">
            Book Appointment or Call:{" "}
            <span className="text-accent-tertiary">+1234567890</span>
          </h2>
          <form action="" className="appointment__form flex flex-col gap-y-5">
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="select relative flex items-center">
                <div className="absolute right-4">
                  <RiArrowDownSLine size={32} className="text-primary" />
                </div>
                <select className="apperance-none outline-none h-full w-full bg-transparent px-4">
                  <option value="1">Select Department</option>
                  <option value="2">Department 1</option>
                  <option value="3">Department 2</option>
                  <option value="4">Department 3</option>
                </select>
              </div>

              <div className="select relative flex items-center">
                <div className="absolute right-4">
                  <RiArrowDownSLine size={32} className="text-primary" />
                </div>
                <select className="apperance-none outline-none h-full w-full bg-transparent px-4">
                  <option value="1">Select Docter</option>
                  <option value="2">Docter 1</option>
                  <option value="3">Docter 2</option>
                  <option value="4">Docter 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input type="text" className="input" placeholder="Full Name" />
              <input type="text" className="input" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col xl:flex-row gap-5">
              <input className="input" type="date" />
              <input className="input" type="time" />
            </div>
            <button className="btn btn-lg btn-accent self-start">
              Book an Appointment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Appointment;

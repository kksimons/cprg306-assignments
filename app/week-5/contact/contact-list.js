"use client";
import React, { useState } from "react";
import contactData from "./contacts-info.json";
import ContactCard from "./contact-card";

function ContactList() {
  // deep defensive copy, copy of all data, copies all the way down
  let contactArray = contactData.map((contact) => ({ ...contact }));

  let [filter, setFilter] = useState("all");
  let [sortBy, setSortBy] = useState("fname");

  let handleChangeFilter = (e) => setFilter(e.target.value);

  let handleChangeSortBy = (e) => setSortBy(e.target.value);

  //sorting
  contactArray = contactArray.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      //sorting alphabetically
      //sortBy determines if it's going to be fname or lname
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      // could even use return a.id - b.id because we only have one other option to sortBy numerically (the id)
      return a[sortBy] - b[sortBy];
    }
  });

  //looking for a true or false vale (what should we should or should not return)
  //if it equals all, our default, I want to show everything (and so by default)
  if (filter != "all") {
    contactArray = contactArray.filter((contact) => contact.type === filter);
  }

  return (
    <div>
      <section className="flex mb-5 px-10 py-5 bg-blue-300">
        <div>
          <label>Filter By:</label>
          <select onChange={handleChangeFilter}>
            <option value="all">All Contacts</option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="flex-1">
          <label>Sort By:</label>
          <select onChange={handleChangeSortBy}>
            <option value="fname">First Name</option>
            <option value="lname">Last Name</option>
          </select>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-5">
        {contactArray.map((contact) => (
          <ContactCard key={contact.id} contactObj={contact} />
        ))}
      </section>
    </div>
  );
}

export default ContactList;

"use client";

import { FormEvent } from "react";

const AdminFormExample: React.FunctionComponent = () => {
  const makeApiCall = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await fetch("/api/hotel", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <form onSubmit={makeApiCall} method="POST">
        <label htmlFor="hotelName">Hotel Name:</label>
        <input type="text" name="hotelName" placeholder="Hotel Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AdminFormExample;

async function apiCall(formData: FormData) {
  "use server";
  const rawFormData = {
    hotelName: formData.get("hotelName"),
  };

  await fetch("http://localhost:3000/api/hotel", {
    method: "POST",
    body: JSON.stringify(rawFormData),
  });
}

export default apiCall;

export async function setHotel() {
  const res = await fetch("/api/addHotel");

  //   if (!res.ok) {
  //     throw new Error("Failed to set Hotel");
  //   }
  //   return res.json;
  console.log("Set Hotel..");
}

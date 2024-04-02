"use client";

interface AdminFormExampleProp {
  apiCall: (formData: FormData) => void;
}

const AdminFormExample: React.FunctionComponent<AdminFormExampleProp> = (
  prop: AdminFormExampleProp,
) => {
  return (
    <div>
      <form action={prop.apiCall}>
        <label htmlFor="hotelName">Hotel Name:</label>
        <input type="text" name="hotelName" placeholder="Hotel Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AdminFormExample;

export default function Page({ params }: { params: { id: string } }) {
  return <h1>Hotel view edit page: {params.id}</h1>;
}

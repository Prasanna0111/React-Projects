export default function CustomButton({
  name,
  route,
}: {
  name: string;
  route: () => void;
}) {
  return (
    <button className="btn" onClick={route}>
      {name}
    </button>
  );
}

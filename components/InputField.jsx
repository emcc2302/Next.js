export default function InputField({
  label,
  type,
  value,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>

      <br />

      <input
        type={type}
        value={value}
        onChange={onChange}
      />

      <br />
      <br />
    </div>
  );
}
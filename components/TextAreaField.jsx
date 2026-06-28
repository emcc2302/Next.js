export default function TextAreaField({
  label,
  value,
  onChange,
}) {
  return (
    <div>
      <label>{label}</label>

      <br />

      <textarea
        rows="5"
        value={value}
        onChange={onChange}
      />

      <br />
      <br />
    </div>
  );
}
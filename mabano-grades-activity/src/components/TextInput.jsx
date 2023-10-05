// eslint-disable-next-line react/prop-types
export default function TextInput({ label, id, type, onChange, value, labelColor, borderColor, focusBorderColor }) {
  return (
    <div className="flex flex-col my-2">
      <label htmlFor={id} className={`font-bold ${labelColor}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        value={value}
        className={`rounded-md border ${borderColor} px-3 py-2 focus:outline-none ${focusBorderColor} transition duration-300`}
      />
    </div>
  );
}

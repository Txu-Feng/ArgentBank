import PropTypes from "prop-types";

export default function Field ({ className="input-wrapper", type="text", labelAndID, name, onChange, innerText}) {
  let component;
  if (type === "textarea") {
    component = <textarea name={name} onChange={onchange} />;
  } else {
    component = (
        <input
            type={type}
            id = {labelAndID}
            name={name}
            onChange={onchange}
        />
      );
  }
  return (
    <div className={className}>
        <label htmlFor={labelAndID}>{innerText ? innerText : labelAndID }</label>
        {component}
    </div>
  );
};

Field.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    labelAndID: PropTypes.string.isRequired,
    name: PropTypes.string,
    onchange: PropTypes.func,
    innerText: PropTypes.string,
};
Field.defaultProps = {
    className: "input-wrapper",
    type: "text",
    labelAndID: "",
    name: "",
    onchange: null,
    innerText: "",
}
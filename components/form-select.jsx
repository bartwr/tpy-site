import dynamic from 'next/dynamic';

const FormSelect = (props) => {
  const {
    name,
    value,
    placeholder,
    onChange,
    classes,
    style,
    options
  } = props;

  return <div className="FormSelect">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={classes}
      style={style}
    >
      <option value="">{placeholder}</option>
      {options.map(x => {
        return <option key={x.value} value={x.value}>
          {x.title}
        </option>
      })}
    </select>
    <style jsx>{`
      select {
        color: #0f2247;
        font-family: "Montserrat", sans-serif;
        font-size: 19px;
        font-weight: 300;
        line-height: 40px;
        height: 40px;
        background-color: #f8f8f8;
        border: none;
        display: block;
        margin: 24px 0;
        width: 100%;
        padding: 0 8px;
      }
    `}</style>
  </div>
}

export default FormSelect;

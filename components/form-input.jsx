import dynamic from 'next/dynamic';

const FormInput = (props) => {
  const {
    type,
    defaultValue,
    placeholder,
    onChange,
    classes,
    style
  } = props;

  return <div className="FormInput">
    <input
      type={type || 'text'}
      defaultValue={defaultValue || ''}
      placeholder={placeholder || ''}
      onChange={onChange}
      className={classes}
      style={style}
    />
    <style jsx>{`
      input {
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

export default FormInput;

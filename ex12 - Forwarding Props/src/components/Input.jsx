const Input = ({ richText, ...props }) => {
  return (
    <>{richText ? <textarea {...props}></textarea> : <input {...props} />}</>
  );
};

export default Input;

// Stateless Components
const Option = (props) => (
  <div>
   {props.optionText}
   <button
    className="button button--link"
    onClick={ () => props.handleDeleteSingleOption(props.optionText) }>
    Remove
  </button>
  </div>
);

export default Option;
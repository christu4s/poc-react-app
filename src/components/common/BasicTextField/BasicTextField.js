import TextField from '@mui/material/TextField';

const BasicTextField = ({key, label,name, id, defaultValue, size, onchange}) => {
  return (
    <div>
    <TextField
    key={key}
    label={label}
    name={name}
    id={id}
    defaultValue={defaultValue}
    size={size}
    onChange={onchange}
  />
  </div>
  )
}

export default BasicTextField
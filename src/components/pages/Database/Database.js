import React, {useState} from 'react';
import BasicCard from "../../common/BasicCard/BasicCard";
import SearchBar from "../../common/SearchBar/SearchBar";
import Grid from '@mui/material/Grid';
import CommonButton from '../../common/CommonButton/CommonButton';
import { IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Margin } from '@mui/icons-material';
import GridWrapper from '../../common/GridWrapper/GridWrapper'
import {headerStyles} from './style'
import BasicModal from '../../common/BasicModal/BasicModal';
import BasicTextField from "../../common/BasicTextField/BasicTextField";


function Database() {
  const [open, setOpen] = useState(false);

  const initialValues = {
    userid:"",
    email:"",
    phonenumber:""
  }
  const [values, setValues] = useState(initialValues);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(null);
  const [resetData, setResetData] = useState([]);
  
  const getSearchBar = () => {
   
    const searchFilterChange = (event) => {
      event.preventDefault();
      setResetData(data);
      const filtered = data.filter(newData => newData.email.includes(event.target.value));
      setData(filtered);
    }

    const resetDataClick = (event) => {
      event.preventDefault();
      setData(resetData);
      console.log(resetData);
    }

    const addUser = (event) => {
     event.preventDefault();
     setOpen(true);
     console.log('clicked');
    }

    const handleClose = (event) => {
      event.preventDefault();
      setOpen(false);
      console.log('clicked');
     }
    
     const closeButton = (event) => {
      event.preventDefault();
      setOpen(false);
      console.log('clicked');
     }
     
  
    

  const formInfos = [
    {
      label: "userId",
      name:"userid"
    },
    {
      label: "email",
      name:"email"
    },
    {
      label: "phoneNo",
      name:"phonenumber"
    },
  ];

  const onchange = (event) =>{
    event.preventDefault();
    const { name, value } = event.target;

    setValues({...values, [name]:value});
    console.log(values);
  }

  const submitForm = (event) =>{
    event.preventDefault();
    data.push(values);
    setOpen(false);
  }

  const cancel = (event) =>{
    event.preventDefault();
    console.log('cancel');
  }
   
    return (
      <Box sx={headerStyles.wrapper}>
      <SearchBar placeholder="Seach by email address, username and user id" onchange={searchFilterChange} SearchBarWidth='720px'/>
      <Box>
      <CommonButton variant='contained' size='large' onclick={addUser} sx={headerStyles.addUserButton}>Add user</CommonButton>
      <IconButton onClick={resetDataClick}><RefreshIcon /></IconButton>
      </Box>
      <BasicModal open={open} hello="Fill out input and hit submit button" handleclose = {handleClose}>
      <div style={{ textAlign:'center'}}>
      {formInfos.map((formInfo, index) => {
            return (
              <div style={{paddingBottom:'10px'}}>
              <BasicTextField
                key={index}
                label={formInfo.label}
                name={formInfo.name}
                value={data.value}
                id="outlined-size-small"
                defaultValue=""
                size="small"
                onchange={onchange}
              />
              </div>
            );
          })}
         
          <CommonButton
            variant="contained"
            size="large"
            onclick={submitForm}
           
          >
            Submit
          </CommonButton>
          <CommonButton
            variant="contained"
            size="large"
            onclick={closeButton}
           
          >
            Cancel
          </CommonButton>
          </div>
        </BasicModal>

        
      </Box>
  );
  }

 

  const getContent = () => {
    return (
      <Typography align='center' sx={{margin:'40px 16px', color:'rgba(0,0,0,0.6)', fontSize:'1.6rem' }}>
        {
          data.map((item, index)=>{
            return (
              <div>
              user id : {item.userid}  phone no : {item.phonenumber}  email : {item.email} 
              </div>
            )
          })
        }
      </Typography>
    );
  }


  return (
   
      <GridWrapper>
      <BasicCard header={getSearchBar(open)} content ={getContent()}/>
      </GridWrapper>
  )
}

export default Database
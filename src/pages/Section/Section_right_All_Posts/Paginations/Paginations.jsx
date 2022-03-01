import * as React from "react";
import Stack from '@mui/material/Stack';
import s from './Paginations..module.css'
import Pagination from'@mui/material/Pagination';


const Paginations = ({ paginate, totalPosts }) => {

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPosts / 5); i++) {
    pageNumber.push(i);
  }



  
  return (
    <div className={s.container}>
      <Stack  onClick={(e) => paginate(e.target.ariaLabel.slice(-1))} >
        <Pagination 
          count={pageNumber.length}
         
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default Paginations;

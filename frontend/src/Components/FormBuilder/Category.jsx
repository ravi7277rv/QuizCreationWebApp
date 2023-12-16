import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PhotoIcon from '@mui/icons-material/Photo';

const Category = () => {
  return (
    <div className="category">
      <div className="content">

        <div className="heading">
          <h3>Question 1</h3>
          <MoreVertIcon className='icon' />
        </div>

        <div className="inputdiv">
          <input type="text" placeholder='Description(optional)' />
          <PhotoIcon  className='icon'/>
        </div>

        <div className="catInput">
          <h3>Categories</h3>
          <div className="catInput1">
            <input type="text" placeholder='Category1' /> <span>X</span>
          </div>
          <div className="catInput2">
            <input type="text" placeholder='Category2' /> <span>X</span>
          </div>
          <div className="catInput3">
            <input type="text" placeholder='Category3 (optional)' /> <span>X</span>
          </div>
        </div>

        <div className="ansInput">
          <div className="ansHeading">
            <p className='p1'>Items</p>
            <p className='p2'>Belong To</p>
          </div>

          <div className="ansInput1">
            <input type="text" placeholder='ans1' />
            <select>
              <option>Option1</option>
              <option>Option1</option>
              <option>Option1</option>
            </select>
          </div>

          <div className="ansInput2">
            <input type="text" placeholder='ans2' />
            <select>
              <option>Option1</option>
              <option>Option1</option>
              <option>Option1</option>
            </select>
          </div>

          <div className="ansInput3">
            <input type="text" placeholder='item3 (optiona)l' className='blur'/>
            <select className='hidden'>
              <option>Option1</option>
              <option>Option1</option>
              <option>Option1</option>
            </select>
          </div>
        </div>
      </div>

      <div className="btnContent">
        <AddCircleIcon className='icon1' />
        <ContentCopyRoundedIcon className='icon' />
        <DeleteForeverRoundedIcon className='icon' />
      </div>
    </div>
  )
}

export default Category

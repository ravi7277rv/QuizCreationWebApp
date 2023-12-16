import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import Category from './Category';

const FormBuilder = () => {
  return (
    <div className='container'>

      <div className="untitledQuiz">
        <div className='heading'>
          <p>Untitled Quiz</p>
        </div>
        <div className="butts">
          <NoteAddOutlinedIcon className='icon' />
          <VisibilityOutlinedIcon  className='icon'/>
          <SettingsIcon  className='icon'/>
          <button className='btn1'>Save</button>
          <button className='btn2'>Save & Proceed</button>
        </div>
      </div>

      <Category />

      


      


      

    </div>

  )
}

export default FormBuilder

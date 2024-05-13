import { PiSmileyAngryDuotone } from 'react-icons/pi';
import { TbSpeakerphone } from 'react-icons/tb';
import { toast } from 'react-toastify';


 // Create a error Toast
 export const errorToast = (msg) => {
    return toast.error(msg, {  icon: <PiSmileyAngryDuotone /> });  
  }


// Create a info Toast
export const infoToast = (msg) => {
    return toast.info(msg, { icon: <TbSpeakerphone color='#299EF7' /> });  
  }

//   Create a success Toast
  export const successToast = (msg) => {
    return toast.success(msg);
  }
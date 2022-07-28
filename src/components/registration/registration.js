import React, { useRef, useState } from "react";
import styles from "./style/registration.module.scss";

import { useDispatch } from "react-redux";
import { registerUser } from "../../slices/usersSlice";
import { Input } from "./input/input";
import { Button } from "../buttons/button";
import { UploadItem } from "./uploadItem/uploadItem";
import { Positions } from "./positions/positions";

export function Registration() {
  const dispatch = useDispatch();

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.inputsWrapper}>
        <Input />
        <Input />
        <Input />
      </div>
      <div className={styles.hint}>
        <span>+38 (XXX) XXX - XX - XX</span>
      </div>

      <div className={styles.positionsWrapper}>
        <Positions />
      </div>

      <div className={styles.uploadWrapper}>
        <UploadItem />
      </div>

      <div className={styles.buttonWrapper}>
        <Button
          text="Sign up"
          callback={() => {
            console.log("SIGN");
          }}
        />
      </div>
    </div>
  );
}
//         <div>
//             <input type="file" onChange={(e)=> {
//                 console.log(e.target.value)
//                 setFile(e.target.files[0])
//             }}/>
//         <button
//                 onClick={()=>{
//                     console.log("File", file)
//                     let formData = new FormData();
//                     formData.append("name", "TEST name");
//                     formData.append("email", "test@gmail.com");
//                     formData.append("position_id", "2");
//                     formData.append("phone", "+380995627833");
//                     formData.append("photo", file);
//
//                     // name: "TEST name",
//                     //     email: "testemail@gmail.com",
//                     //     phone: "+380995627833",
//                     //     position_id: 2,
//                     //     photo:  data,
//                     dispatch(registerUser(formData))
//                 }}
//             >REGISTER
//         </button>
//     </div>)
// }

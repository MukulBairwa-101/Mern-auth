import {RxHamburgerMenu} from "react-icons/rx";
import {MdNotificationsNone} from "react-icons/md";
import {BiSearch} from "react-icons/bi";
import {FcGoogle} from "react-icons/fc";
import {SlLockOpen} from "react-icons/sl"
import {HiLockClosed,HiLockOpen} from "react-icons/hi"



export const constants = {
    emailPattern :/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    passwordPattern :/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/,
    formErrors:{
        nameError:{
            required:'Username is required',
            minLength:'Username should be of atleast 3 charaters'
        },
        emailError:{
            required:'Email is required',
            pattern:'Email address is invalid'
        },
        passwordError:{
            required:'Password is required',
            pattern:'Password should be of maximum 8 characters long ,1 uppercase letter , 1 lowercase letter ,1 special character , 1 number '
        }
    }
}


export const iconset = {FcGoogle,SlLockOpen,HiLockClosed,HiLockOpen}



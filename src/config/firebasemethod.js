import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set ,push, onValue} from "firebase/database";
// import { letterSpacing } from "@mui/system";

const database = getDatabase(app);

const auth = getAuth(app);

let signUpUser = (obj)=>{
  let {email,password} = obj 


  return new Promise((resolve,reject)=>{
    createUserWithEmailAndPassword(auth, email, password).then((userInformation)=>{
        let user = userInformation.user;
        let reference = ref(database,`users/${user.uid}`);
        set(reference,obj).then((success)=>{
            resolve("user created succesfully")
        }).catch((errr)=>{
            reject(errr)
        })
    
      }).catch((err)=>{
        reject(err)
      })

  })
  
  

}
function senttodos(obj,nodeName){
const postListRef = ref(database, `${nodeName}/`);
const newPostRef = push(postListRef);
set(newPostRef, obj);
}






const loginUser = (obj)=>{
  let {email,password} = obj;
  return new Promise((resolve,reject)=>{
    signInWithEmailAndPassword(auth,email,password).then((userInformation)=>{
      const user = userInformation.user;
      let starCountRef = ref(database,`users/${user.uid}`);
      onValue(starCountRef,(snapshot)=>{
        const data = snapshot.exists();
        if(data){
          resolve(snapshot)
        }else{
          reject("data not found")
        }
      })

    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      reject(errorMessage)

    })
  })

}


export {signUpUser,senttodos,loginUser,};




 import { FormGroup, FormControl, Validators} from '@angular/forms';


export function userNameValidator(control: FormControl):{[s:string]:boolean}{
      if(control.value === "bbb"){
        return {"userName" : true}
      } else{
        return null;
      }
    }


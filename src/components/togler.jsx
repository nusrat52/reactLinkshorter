import React from 'react'
import Butto from "./button";

let Signin = () => {
    return (
        <form className="container-nus mb-600 ">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip"/>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"/>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    )
}

let Login = () => {
    return (
        <form class="form-inline container-nus d-flex flex-column align-items-start">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Jane Doe"/>

  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="input-group mb-2 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">@</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"/>
  </div>


  <div class="form-group d-block">
    <label for="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" class="form-control w-100" aria-describedby="passwordHelpInline"/>
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
            </div>
        
            
            <div class="form-check mb-2 mr-sm-2">
     
    <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
    <label class="form-check-label" for="inlineFormCheck">
                Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
    )
}
function Toggler({ arr, closed }) {
    if (arr.toggler==="login"){
    return (
        <section className="togler">
            <div className="togler__wrapper d-flex justify-content-end">
            <a onClick={()=>{closed(arr)}} className="togler__close">
                    close
            </a>
            </div>
            <Login/>


       </section>
        )
    }
    return (
        <section className="togler">
            <div className="togler__wrapper d-flex justify-content-end">
            <a onClick={()=>{closed(arr)}} className="togler__close">
                    close
            </a>
            </div>
            <Signin/>


       </section>
        )
}

export default Toggler













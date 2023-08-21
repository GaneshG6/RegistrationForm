import React from "react";
// import validation from "./Validation";
const ChildComponent = (props) => {
    console.log(props);

    const validation = (value, upload) => {
        console.log(value, "vali");
        let error = {}

        error.errorCount = 0
        if (value.name.length >= 3) {
            error.name = "";

        }
        else {
            error.name = " * Minimum 3 characters * ";
            error.errorCount = error.errorCount + 1;
        }
        if (value.age.length > 0) {
            error.age = "";
            // const numbers = ["1", "2", "3", "4", "5", "6", "8", "9", "0", "7"]
            // let numberCount = 0;
            // for (let i = 0; i < value.age.length; i++) {
            //     for (let m = 0; m < numbers.length; m++) {
            //         if (value.age[i] === numbers[m]) {
            //             numberCount = numberCount + 1
            //         }
            //     }

            // }
            // if (numberCount == value.age.length) {
            //     error.age = ""
            // }
            // else {
            //     error.age = "* Only numbers *"
            // }
        }
        else {
            error.age = " * Age not mentioned *";
            error.errorCount = error.errorCount + 1;
        }
        if (value.gender == "male" || value.gender == "female") {
            error.gender = "";
        }
        else {
            error.gender = " * Gender not mentioned *";
            error.errorCount = error.errorCount + 1;
        }
        if (value.mobile.length == 10) {
            error.mobile = ""
        //     const numbers = ["1", "2", "3", "4", "5", "6", "8", "9", "0", "7"]
        //     let numberCount = 0;
        //     for (let i = 0; i < value.mobile.length; i++) {
        //         for (let m = 0; m < numbers.length; m++) {
        //             if (value.mobile[i] === numbers[m]) {
        //                 numberCount = numberCount + 1
        //             }
        //         }

        //     }
        //     if (numberCount == 10) {
        //         error.mobile = ""
        //     }
        //     else {
        //         error.mobile = "* Only numbers *"
        //     }
        }
        else if (value.mobile == "") {
            error.mobile = "* Not mentioned mobile number *"
            error.errorCount = error.errorCount + 1;
        }
        else {
            error.mobile = "* invalid mobile number *"
            error.errorCount = error.errorCount + 1;
        }

        let lowerCaseMail = value.email.toLowerCase();
        let domain = ["gmail.com", "yahoo.com",];
        let check1, domainLength;
        for (let j = 0; j < domain.length; j++) {
            if (lowerCaseMail.indexOf(domain[j]) > 0) {
                check1 = lowerCaseMail.indexOf(domain[j])
                domainLength = domain[j].length
            }
        }
        let atCheck = lowerCaseMail.indexOf("@");
        let dotCheck = lowerCaseMail.indexOf(".");
        let specialChar = "`~!$%#^&*()_-+=}]{[|:?/><,;";
        let specialCharCheck = true;
        for (let k = 0; k < atCheck; k++) {
            for (let l = 0; l < specialChar.length; l++) {
                if (lowerCaseMail[k] === specialChar[l]) {
                    specialCharCheck = false
                }
            }
        }
        if (atCheck !== -1 && check1 - atCheck === 1 && atCheck <
            dotCheck && lowerCaseMail.length == atCheck + domainLength + 1 && dotCheck > 3 && specialCharCheck) {
            error.email = ""
        }
        else {
            error.email = "* invalid email *"
            error.errorCount = error.errorCount + 1;
        }
        if (upload == true) {
            error.upload = ""
        }
        else {
            error.upload = "* upload is not clicked *"
            error.errorCount = error.errorCount + 1;
        }

        return error
    }


    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        if(e.target.type == "number"){
            if(e.target.maxLength<e.target.value.length){
                e.target.value = e.target.value.slice(0,e.target.maxLength)
            }
        }
        const object = { ...props.form, [e.target.name]: e.target.value }
        console.log(object, 9);
        props.formFunc(object)

    }
    const handleUpload = ((f) => {
        props.uploadFunc(!props.upload)
    })
    const handleSubmit = (e) => {
        let errorCheck = (validation(props.form, props.upload))
        console.log(errorCheck);
        if (errorCheck.errorCount != 0) {
            e.preventDefault()
        }
        else {
            props.printFunc(true)
            e.preventDefault()
            props.storeFunc([...props.store, props.form])
            props.formFunc({ name: '', age: '', gender: props.form.gender, mobile: '', email: '' })
            // e.target.reset()
        }
        props.errorFunc(errorCheck)
    }
    // console.log(props.error.name, 50);
    return (
        <form>
            <li> <p>Name : </p>
            </li><li>
                <input type="text" name="name" value={props.form.name} placeholder="Your name" onChange={(e) => { handleChange(e) }} /> </li>
            <p className="error">{props.error.name}</p>
            <li> <p>Age : </p>
            </li><li>
                <input className="input-box" type="number" name="age" value={props.form.age} maxLength={2} placeholder="Your age" onChange={(e) => { handleChange(e) }} /></li>
            <p className="error">{props.error.age}</p>
            <li> <p>Gender :</p>
            </li><li>
                <input type="radio" id="male" name="gender" value="male" onChange={(e) => { handleChange(e) }} /> Male
                <input type="radio" id="female" name="gender" value="female" onChange={(e) => { handleChange(e) }} />Female </li>
            <p className="error">{props.error.gender}</p>
            <li> <p>Mobile Number :</p>
            </li><li>
                <input type="number" name="mobile" value={props.form.mobile} maxLength={10} placeholder="Your mobile no." onChange={(e) => { handleChange(e) }} /> </li>
            <p className="error">{props.error.mobile}</p>
            <li> <p>Email : </p>
            </li><li>
                <input type="email" name="email" value={props.form.email} placeholder="Your email" onChange={(e) => { handleChange(e) }} /> </li>
            <p className="error">{props.error.email}</p>
            <li> <input type="checkbox" name="upload" onChange={(f) => { handleUpload(f) }} /> upload </li>
            <p className="error">{props.error.upload}</p>
            <li> <button onClick={handleSubmit}>Submit</button> </li>
        </form>
    )
}
export default ChildComponent
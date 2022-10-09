export default function FormValidate(values){
    let errors = {};

    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone number is required';
    } else if (values.phone.length < 10) {
      errors.phone = 'Phone number needs to be 10 digits long';
    }
  
    if (!values.message) {
      errors.message = 'Drop Your message here!';
    } 
    return errors;
}

import { makeStyles } from "@material-ui/styles"
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';

import { Grid, TextField, Button, CardContent} from '@material-ui/core';
function ContactForm() {
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
        });
    };
    const onSubmit = async (data) => {

    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };
    const useStyles = makeStyles(() => ({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background: 'linear-gradient(45deg,#FF8E53 120% ,#FE6B8B 100% )',
        },
        error: {
          color:"red"
        },
        title: {
          fontFamily: "Nunito",
          fontWeight: "bold",
          fontSize: "3.5rem",
          color: "#fff"
        }
    }))
    const classes = useStyles();
    return (
        <div className = {classes.root}>
          <h1 className = {classes.title}>Contact Me</h1>   
          <CardContent>
            
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField required name = "name" placeholder="First name" label="First Name" variant="outlined" fullWidth

                  {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}  />
                      {errors.name && (
                      <span className={classes.error}>Please enter a valid name</span>
                    )}
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField required name = "name" placeholder="Last name" label="Last Name" variant="outlined" fullWidth 
                  {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}/>
                      {errors.name && (
                      <span className={classes.error}>Please enter a valid name</span>
                    )}
                      
                </Grid>
                <Grid item xs={12}>
                  <TextField required  name = "email" type="email" placeholder="Email" label="Email" variant="outlined" fullWidth
                  {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}/>
                      {errors.email && (
                      <span className={classes.error}>Please enter a valid email address</span>
                    )}
                </Grid>
                <Grid item xs={12}>
                  <TextField required  name = "subject" placeholder="Subject" label="Subject" variant="outlined" fullWidth 
                  {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}/>
                      {errors.subject && (
                      <span className={classes.error}>{errors.subject.message}</span>
                    )}
                      
                </Grid>
                <Grid item xs={12}>
                  <TextField required name = "message" label="Message" multiline rows={4} placeholder="Message" variant="outlined" fullWidth 
                   {...register('message', {
                        required: true
                      })}/>{errors.subject && (
                      <span className={classes.error}>{errors.subject.message}</span>
                    )}
                      
                </Grid>
                <Grid item xs={12}>
                  <Button disabled = {disabled} type="submit" variant="contained"  fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>

        </div>
    )
}

export default ContactForm;
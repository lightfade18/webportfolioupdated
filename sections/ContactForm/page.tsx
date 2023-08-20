'use client';

// imports
import { useForm } from 'react-hook-form';
import Input from '@components/Input/page';
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { setCursorVariant } from '@utils/cursorState';

export interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    shouldFocusError: false,
    reValidateMode: 'onChange',
  });

  const [emailSent, setEmailSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  async function onSubmit(data: FormValues) {
    const dataValue = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    
    try {
      setIsDisabled(true);
      const response = await fetch("/api/nodemailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue),
      });

      if (response.ok) {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
          setIsDisabled(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      setIsDisabled(false);
    }
  }

  const cursorEnter = () => setCursorVariant('focus');
  const cursorLeave = () => setCursorVariant('default');

  return (
    <section className={cx['contact-section']}>
      <div className={cx['contact-div']}>
        <h1 className={cx['about-div--main-font']}>Contact Me</h1>
        <hr className={cx['about-div--hr']}/>
        <h2 className={cx['about-div--sub-font']}>I am happy to become a part of your team.</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <div 
            className={cx['contact-div--first-layer']}
          >
            <Input
              reference={register('name', { 
                required: 'Name is required.',
                pattern: {
                  value: /[A-Za-z]{2}/,
                  message: 'Please enter a valid name',
                }
              })}
              type='text'
              placeholder='Enter your name'
              label='Name'
              name='name'
              error={errors.name}
            />
            <Input
              reference={register('email', { 
                required: 'Email is required.',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Your email is invalid.',
                }
              })}
              type='email'
              placeholder='Enter your email'
              label='Email'
              name='email'
              error={errors.email}
            />
            <div className={cx['contact-div--textarea-div']}>
              <Input
                reference={register('message')}
                type='textArea'
                placeholder='Enter your message'
                label='Message'
                name='message'
              />
            </div>
          </div>
          <p className={clsx(cx['contact-div--email-message'], {[cx['contact-div--email-message-shown']] : emailSent})}>Message sent successfully.</p>
          <div className={cx['contact-div--button-div']}>
            <div 
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              className={clsx(cx['contact-div--contact-button'], {[cx['contact-div--disabled-button']] : isDisabled})}
            >
              <button
                type="submit"
                disabled={isDisabled}
              >
                <span className={cx['contact-div--contact-button--span']}>Submit</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;
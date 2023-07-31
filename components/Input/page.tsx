'use client';

import React, { useState, forwardRef, useId } from 'react';
import type { FieldError } from 'react-hook-form';
import cx from '@styles/MainStyle.module.scss';
import clsx from 'clsx';

// Icons
import IconDangerInfo from '@public/assests/icons/icon-danger-info.svg';

export interface Props<Name = string> {
  type: 'text' | 'textArea' | 'email' | 'password';
  name: Name;
  rows?: number;
  placeholder?: string;
  disabled?: boolean;
  value?: string | number;
  label?: string;
  error?: FieldError;
  reference?: any;
  requiredMarkVariant?: 'red' | 'green';
  onInput?: (e: string) => void;
}

const Input = forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  function Input({
    type, error, name, rows, label, reference, placeholder, onInput, ...props
  }, ref){
    const id = useId();
    const [inputVal, setInputVal] = useState<string>('');
    const inputId = `${id}${name}`;

    const onHandleInput = (e: React.SyntheticEvent<HTMLInputElement & HTMLTextAreaElement>) => {
      e.preventDefault();
      setInputVal(e.currentTarget.value);
      onInput?.(e.currentTarget.value);
    };

    const fields = () => {
      switch (type) {
        case 'textArea':
          return (
            <textarea 
              ref={ref}
              {...props}
              {...reference}
              rows={rows || 3}
              id={inputId}
              value={inputVal}
              name={name}
              autoComplete='off'
              placeholder={placeholder || ''}
              className={cx['input-wrapper--textarea']}
              onInput={onHandleInput}
            />
          );
        default:
          return(
            <>
              <input 
                ref={ref}
                {...props}
                {...reference}
                id={inputId}
                value={inputVal}
                name={name}
                placeholder={placeholder || ''}
                type={type}
                autoComplete="off"
                className={cx['input-wrapper--input']}
                onInput={onHandleInput}
              />
              {error && (
                <div className={cx['input-wrapper--error-div']}>
                  <IconDangerInfo className={cx['input-wrapper--error-icon']} />
                  <p className={cx['input-wrapper--error-message']}>
                    {' '}
                    {error.message?.toString() || ''}{' '}
                  </p>
                </div>
              )}
          </>
          );
      }
    };

    return (
      <div className={cx['input-wrapper']}>
        <label className={clsx(cx['input-wrapper--label'])} htmlFor={inputId}>
          {label || ''}
          {type !== 'textArea' && (
            <span className={clsx(cx['input-wrapper--asterisk'], {[cx['input-wrapper--asterisk-valid']] : !error})}>{` *`}</span>
          )}
        </label>
        <div>
          {fields()}
        </div>
      </div>
    );
  }
);

export default Input;
import { Button } from 'flowbite-react';
import React, { useRef } from 'react';
import { SiFusionauth } from 'react-icons/si';
import axiosInstance from '../../utils/AxiosInstance';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function OtpForm({ inputsRef, title, handleSubmit }) {
  const handleKeyUp = (index, event) => {
    if (event.key === 'Backspace' && index > 0 && event.target.value === '') {
      inputsRef.current[index - 1].focus();
    } else if (
      event.target.value.length === 1 &&
      index < inputsRef.current.length - 1
    ) {
      inputsRef.current[index + 1].focus();
    }
  };

  // paste the otp
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = (e.clipboardData || window.clipboardData).getData('text');
    // /\D/g
    const digits = pasteData.replace(/\D/g, '').split('');
    digits.forEach((digit, index) => {
      if (inputsRef.current[index]) {
        inputsRef.current[index].value = digit;
        if (index < inputsRef.current.length - 1) {
          inputsRef.current[index + 1].focus();
        }
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <SiFusionauth className="text-5xl" />
        <h1 className="text-2xl font-bold mb-10">
          {title ?? 'Verify Email By OTP'}
        </h1>
      </div>

      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-2 space-x-2 rtl:space-x-reverse">
          {[...Array(6)].map((_, index) => (
            <div key={index + 1}>
              <label htmlFor={`code-${index + 1}`} className="sr-only">
                Code {index + 1}
              </label>
              <input
                type="text"
                maxLength="1"
                data-focus-input-init
                data-focus-input-next="code-2"
                id={`code-${index + 1}`}
                className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                required
                ref={(el) => (inputsRef.current[index] = el)}
                onKeyUp={(e) => handleKeyUp(index, e)}
                onPaste={handlePaste}
              />
            </div>
          ))}
        </div>
        <div className="block mt-6 mb-4">
          <Button type="submit" className="w-48 mx-auto">
            Verify Email OTP
          </Button>
        </div>
        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          Please introduce the 6 digit code we sent via email.
        </p>
      </form>
    </>
  );
}

export default OtpForm;

import { useForm } from 'react-hook-form';
import './Register.scss'
import 'react-phone-number-input/style.css';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';

export const Register = () => {
  const [phone, setPhone] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = () => {
    setPhone('+48');
    reset();
  }

  const handleFocus = () => {
    setShowErrorMessage(true);
  };

  const handleChange = (value) => {
    setPhone(value);
    setShowErrorMessage(false);
  };

  return (
    <div className="background-container">
       <div className="background-overlay">
          <h2>Zarejestruj się</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register('firstName', {
                required: 'field cannot be empty',
                minLength: {
                  value: 2,
                  message: 'min name length - 2'
                },
                maxLength: {
                  value: 16,
                  message: 'max name length - 16'
                },
              })}
              placeholder="Imię"
            />
            <div>
              {errors.firstName && <p>{errors.firstName.message || "Error!"}</p>}
            </div>
            <input
              {...register('lastName', {
                required: 'field cannot be empty',
                minLength: {
                  value: 2,
                  message: 'min surname length - 2'
                },
                maxLength: {
                  value: 16,
                  message: 'max surname length - 16'
                },
              })}
              placeholder="Nazwisko"
            />
            <div>
              {errors.lastName && <p>{errors.lastName.message || "Error!"}</p>}
            </div>
            <input
              {...register('email', {
                required: 'field cannot be empty',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "input correct e-mail",
                },
              })}
              placeholder="E-mail"
            />
            <div>
              {errors.email && <p>{errors.email.message || "Error!"}</p>}
            </div>
            <PhoneInput
              className='phone'
              defaultCountry="pl"
              value={phone}
              onChange={(value) => {
                setPhone(value); 
              }}
              onFocus={() => {
                setShowErrorMessage(true);
              }}
              inputProps={{
                onFocus: handleFocus,
              }}
              onPhoneNumberChange={handleChange}
            />
            <div>
              {showErrorMessage && phone.length < 15 && <p>{"should contains 9 number"}</p>}
            </div>
            <button 
              type="submit" 
              className='button' 
              disabled={!isValid || phone.length < 15}
              >
                zarejestruj się
            </button>
          </form>
        </div>
    </div>
  );
}
import React, { useState } from 'react';
import './passwordgenerator.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberCharset = '0123456789';
    const specialCharCharset = '!@#$%^&*()_-+=<>?';

    let combinedCharset = charset;
    if (includeUppercase) combinedCharset += uppercaseCharset;
    if (includeNumbers) combinedCharset += numberCharset;
    if (includeSpecialChars) combinedCharset += specialCharCharset;

    let newPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * combinedCharset.length);
      newPassword += combinedCharset[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className="container mx-auto my-8 p-4 rounded-md">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mb-8">
        <div className="flex-shrink-0">
          <img
            src="img1.png"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="flex-wrap ml-4">
          <h1 className="text-4xl font-semibold mb-14 text-blue-950">Secure Password Generator</h1>
          <div className='text-wrap mb-8'>
            <p className="text-blue-900">
              Use this free Password Generator to create highly secure passwords that
              are difficult to crack or guess. Just select the criteria for the passwords you
              need and click "Generate Password". Remember, the more options you choose
              the more secure the passwords will be.
            </p>
          </div>
          <div className="mb-4 ">
            <label className="text-blue-900 font-semibold">Password Length:</label>
            <input
              type="number"
              value={passwordLength}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              className="border border-blue-300 rounded-md p-2 ml-2"
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-900 mr-2 font-semibold">Include Uppercase:</label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-900 mr-2 font-semibold">Include Numbers:</label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
          </div>
          <div className="mb-4">
            <label className="text-blue-900 mr-2 font-semibold">Include Special Characters:</label>
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
            />
          </div>
          <button
            className='button'
            onClick={generatePassword}
          >
            Generate Password
          </button>
          <div className="mt-8 mb-4">
            <p className="text-2xl font-bold text-green-600">{password}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;

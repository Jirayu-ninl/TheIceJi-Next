import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { testForm as CSS } from 'pages/admin/styles'

const TestForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
  })
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [Errors, setErrors] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const handleChange = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const name = e.target.name
    setFormData((state) => ({ ...state, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (formData.password !== confirmPassword) {
        setErrors('Passwords need to match!')
        return
      }
      const res = await axios.post(
        'http://localhost:3000/api/auth/signup',
        formData
      )
      setCookie('Email', res.data.email)
      setCookie('UserId', res.data.userID)
      // setCookie('AuthToken', res.data.token)

      if (res.status === 201) {
        router.push('login')
      } else if (res.status === 409) {
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={CSS.Container}>
      <form className={CSS.Form} onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={handleChange}
          required={true}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name='email'
          placeholder='Email'
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name='userName'
          placeholder='User Name'
          required={true}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required={true}
          onChange={handleChange}
        />
        <input
          type='password'
          name='confirm_password'
          placeholder='Confirm Password'
          required={true}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default TestForm

import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { testForm as CSS } from 'pages/admin/styles'

const TestForm = () => {
  const router = useRouter()
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setFormData((state) => ({ ...state, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        formData
      )

      if (res.status === 201) {
        setCookie('Email', res.data.email)
        setCookie('UserId', res.data.userID)
        setCookie('AuthToken', res.data.token, {
          maxAge: 60 * 60 * 24 * 3, // ** 3 days
        })
        router.push('dashboard')
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
          name='email'
          placeholder='E-mail'
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
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default TestForm

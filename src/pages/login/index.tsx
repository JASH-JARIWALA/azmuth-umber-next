// ** React Imports
import { useState, ReactNode } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
// import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'

import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})

const defaultValues = {
  password: 'admin',
  email: 'admin@vuexy.com'
}

interface FormData {
  email: string
  password: string
}

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(true)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()

  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Email or Password is invalid'
      })
    })
  }

  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            backgroundColor: 'customColors.bodyBg',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <LoginIllustration alt='login-illustration' src={`/images/pages/${imageSource}-${theme.palette.mode}.png`} />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Box>
              {/* <svg width={34} viewBox='0 0 32 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={theme.palette.primary.main}
                d='M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z'
              />
              <path
                fill='#161616'
                opacity={0.06}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z'
              />
              <path
                fill='#161616'
                opacity={0.06}
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                fill={theme.palette.primary.main}
                d='M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z'
              />
            </svg> */}
              <svg width='401' height='64' viewBox='0 0 401 64' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M34.963 41.5351V15.1447H43.7696V60.2343H35.1392V52.4259H34.6695C33.6322 54.833 31.9688 56.8389 29.6791 58.4437C27.4089 60.0289 24.5811 60.8214 21.1954 60.8214C18.299 60.8214 15.7354 60.1854 13.5044 58.9134C11.2929 57.6217 9.55119 55.7136 8.27913 53.1891C7.02664 50.6645 6.4004 47.5431 6.4004 43.8248V15.1447H15.1776V42.768C15.1776 45.8405 16.0289 48.2868 17.7315 50.1068C19.4341 51.9268 21.6455 52.8368 24.3658 52.8368C26.0097 52.8368 27.6438 52.4259 29.2681 51.6039C30.912 50.782 32.2721 49.5393 33.3485 47.8758C34.4444 46.2123 34.9826 44.0988 34.963 41.5351ZM34.897 60.2343V15.1447H43.3219V22.4835H43.8797C44.819 19.9981 46.3553 18.0607 48.4884 16.6712C50.6216 15.2622 53.1755 14.5576 56.1501 14.5576C59.1639 14.5576 61.6885 15.2622 63.7238 16.6712C65.7787 18.0803 67.2953 20.0177 68.2738 22.4835H68.7435C69.8199 20.0764 71.5323 18.1585 73.8807 16.7299C76.2291 15.2817 79.0276 14.5576 82.2763 14.5576C86.3664 14.5576 89.7031 15.8395 92.2864 18.4032C94.8892 20.9669 96.1907 24.832 96.1907 29.9985V60.2343H87.4134V30.8204C87.4134 27.7675 86.5817 25.5561 84.9183 24.1861C83.2548 22.8162 81.2684 22.1313 78.9591 22.1313C76.1019 22.1313 73.8807 23.0119 72.2955 24.7732C70.7103 26.515 69.9177 28.7558 69.9177 31.4956V60.2343H61.1699V30.2627C61.1699 27.8164 60.4066 25.8496 58.8802 24.3623C57.3537 22.8749 55.3673 22.1313 52.9211 22.1313C51.2576 22.1313 49.7214 22.5716 48.3123 23.4523C46.9228 24.3133 45.7975 25.5169 44.9365 27.063C44.0949 28.609 43.6742 30.3997 43.6742 32.435V60.2343H34.897ZM87.9932 60.2343V0.114869H96.7704V22.4542H97.2988C97.8076 21.5148 98.5415 20.4287 99.5005 19.1958C100.459 17.9628 101.79 16.8865 103.493 15.9667C105.195 15.0273 107.446 14.5576 110.244 14.5576C113.885 14.5576 117.133 15.4774 119.99 17.317C122.848 19.1566 125.088 21.8084 126.713 25.2723C128.357 28.7362 129.179 32.9046 129.179 37.7776C129.179 42.6506 128.366 46.8288 126.742 50.3123C125.118 53.7762 122.887 56.4475 120.049 58.3263C117.211 60.1854 113.973 61.115 110.333 61.115C107.593 61.115 105.352 60.6551 103.61 59.7353C101.888 58.8155 100.538 57.7392 99.5592 56.5062C98.5807 55.2733 97.8272 54.1774 97.2988 53.2184H96.5649V60.2343H87.9932ZM96.5943 37.6895C96.5943 40.8599 97.0542 43.6389 97.974 46.0264C98.8938 48.414 100.225 50.2829 101.966 51.6333C103.708 52.964 105.841 53.6294 108.366 53.6294C110.988 53.6294 113.18 52.9347 114.941 51.5452C116.703 50.1362 118.033 48.2281 118.934 45.8209C119.853 43.4138 120.313 40.7033 120.313 37.6895C120.313 34.7149 119.863 32.0436 118.963 29.6756C118.082 27.3076 116.752 25.4386 114.971 24.0687C113.209 22.6988 111.008 22.0139 108.366 22.0139C105.822 22.0139 103.669 22.6695 101.908 23.9807C100.166 25.2919 98.8449 27.1217 97.9446 29.4701C97.0444 31.8185 96.5943 34.5583 96.5943 37.6895Z'
                  fill='#10265F'
                />
                <path
                  d='M139.576 63.7659C135.959 63.7659 132.844 62.9981 130.231 61.4625C127.633 59.9112 125.55 58.124 124.208 54.9325C122.284 50.3592 121.3 42.9093 121.65 33.2685C121.793 29.328 122.351 26.2398 123.753 23.3903C125.172 20.5408 127.147 18.3166 129.681 16.7178C132.23 15.1189 135.21 14.3194 138.62 14.3194C139.725 14.3194 146.752 14.3194 153.063 14.3195C159.994 14.3195 167.961 14.007 173.005 18.7599C174.55 20.2163 175.769 22.108 176.662 24.4351C177.554 26.7464 178 29.5563 178 32.8648V35.3819L125.689 35.1682V28.8998L170.997 29.1135C170.997 27.2455 170.615 26.5406 169.85 25.1C167.18 20.0156 159.67 20.1846 153.927 20.1846C147.508 20.1846 139.73 20.1846 138.667 20.1846C136.66 20.1846 134.907 20.6754 133.409 21.6569C131.927 22.6225 130.78 23.889 129.968 25.4562C129.171 27.0076 128.773 28.6935 128.773 30.514V34.6695C128.773 37.1074 129 49.6929 130.517 52.6529C131.394 54.3626 132.613 55.6686 134.174 56.5709C135.736 57.4574 137.56 57.9007 139.647 57.9007C141.002 57.9007 142.237 57.7107 143.352 57.3308C144.467 56.935 145.431 56.3493 146.244 55.5736C147.056 54.7979 147.678 53.8402 148.108 52.7004L154.872 53.9114C154.33 55.8902 153.358 57.6237 151.956 59.1117C150.57 60.584 148.825 61.7317 146.722 62.5549C144.635 63.3622 142.252 63.7659 139.576 63.7659Z'
                  fill='#10265F'
                />
                <path
                  d='M148.079 61.8637V38.3226H154.988V44.1391H155.37C156.04 42.1685 157.219 40.619 158.909 39.4907C160.614 38.3465 162.543 37.7744 164.694 37.7744C165.14 37.7744 165.666 37.7903 166.272 37.822C166.894 37.8538 167.38 37.8936 167.73 37.9412V44.7588C167.444 44.6794 166.933 44.592 166.2 44.4966C165.467 44.3854 164.734 44.3298 164.001 44.3298C162.311 44.3298 160.805 44.6873 159.482 45.4025C158.175 46.1017 157.139 47.079 156.374 48.3345C155.609 49.5741 155.227 50.9884 155.227 52.5776C155.227 52.5776 154.862 55.2074 152.96 58.0601C149.79 61.5467 148.079 61.8637 148.079 61.8637Z'
                  fill='#10265F'
                />
                <path
                  d='M174.672 60.5156L175.359 60.5156L175.359 62.7909L174.672 62.7909L174.672 60.5156ZM171.085 62.5032L175.359 62.5032L175.359 63.384L171.085 63.384L171.085 62.5032ZM172.826 60.8121L173.495 60.8121L173.495 62.7909L172.826 62.7909L172.826 60.8121ZM171.085 60.5185L171.775 60.5185L171.775 62.7909L171.085 62.7909L171.085 60.5185ZM174.241 57.7764C174.164 57.7764 174.096 57.7882 174.035 57.8117C173.973 57.8332 173.916 57.8743 173.865 57.935C173.812 57.9956 173.76 58.0808 173.709 58.1904C173.659 58.3 173.606 58.4419 173.551 58.6161C173.488 58.8099 173.418 58.9938 173.339 59.168C173.261 59.3403 173.17 59.4929 173.066 59.626C172.961 59.7572 172.838 59.8609 172.699 59.9372C172.56 60.0116 172.399 60.0488 172.215 60.0488C172.037 60.0488 171.875 60.0097 171.731 59.9314C171.584 59.8531 171.459 59.7435 171.355 59.6025C171.249 59.4616 171.168 59.2953 171.111 59.1034C171.054 58.9097 171.026 58.6973 171.026 58.4664C171.026 58.1512 171.083 57.8762 171.196 57.6414C171.31 57.4065 171.465 57.2245 171.663 57.0953C171.861 56.9642 172.087 56.8986 172.341 56.8986L172.341 57.7735C172.216 57.7735 172.106 57.7999 172.012 57.8528C171.917 57.9036 171.841 57.9819 171.786 58.0876C171.732 58.1914 171.704 58.3225 171.704 58.481C171.704 58.6337 171.728 58.7609 171.775 58.8627C171.82 58.9645 171.881 59.0408 171.96 59.0917C172.036 59.1426 172.122 59.168 172.218 59.168C172.29 59.168 172.356 59.1504 172.415 59.1152C172.473 59.078 172.528 59.0232 172.579 58.9508C172.63 58.8784 172.678 58.7893 172.723 58.6836C172.768 58.5779 172.812 58.4556 172.855 58.3166C172.926 58.0837 173.005 57.8792 173.093 57.703C173.181 57.5249 173.28 57.3762 173.389 57.2568C173.499 57.1374 173.623 57.0473 173.762 56.9867C173.901 56.926 174.059 56.8957 174.235 56.8957C174.421 56.8957 174.587 56.9319 174.734 57.0043C174.881 57.0767 175.005 57.1814 175.107 57.3184C175.209 57.4554 175.286 57.6189 175.339 57.8087C175.392 57.9986 175.418 58.2109 175.418 58.4458C175.418 58.6572 175.391 58.8656 175.336 59.0712C175.279 59.2767 175.194 59.4636 175.08 59.6319C174.967 59.7983 174.822 59.9314 174.646 60.0312C174.47 60.131 174.261 60.1809 174.021 60.1809L174.021 59.2972C174.154 59.2972 174.266 59.2767 174.358 59.2356C174.45 59.1945 174.525 59.1367 174.581 59.0623C174.638 58.986 174.679 58.896 174.705 58.7922C174.73 58.6866 174.743 58.5711 174.743 58.4458C174.743 58.2931 174.721 58.1679 174.678 58.07C174.635 57.9702 174.575 57.8968 174.499 57.8498C174.423 57.8009 174.337 57.7764 174.241 57.7764ZM171.085 54.3855L175.359 54.3855L175.359 55.2633L171.085 55.2633L171.085 54.3855ZM171.085 53.0702L171.775 53.0702L171.775 56.558L171.085 56.558L171.085 53.0702ZM174.699 48.3933L175.359 48.3933L175.359 51.3175L174.796 51.3175L173.313 49.9347C173.158 49.7957 173.022 49.6861 172.905 49.6058C172.786 49.5256 172.679 49.4679 172.585 49.4326C172.489 49.3954 172.398 49.3768 172.312 49.3768C172.183 49.3768 172.072 49.3984 171.98 49.4414C171.886 49.4845 171.814 49.5481 171.763 49.6323C171.712 49.7145 171.687 49.8163 171.687 49.9376C171.687 50.0668 171.718 50.1783 171.781 50.2723C171.843 50.3643 171.93 50.4347 172.042 50.4837C172.153 50.5307 172.28 50.5541 172.421 50.5541L172.421 51.4026C172.166 51.4026 171.933 51.3419 171.722 51.2206C171.508 51.0992 171.339 50.928 171.214 50.7068C171.087 50.4856 171.023 50.2234 171.023 49.92C171.023 49.6205 171.072 49.368 171.17 49.1625C171.266 48.9551 171.405 48.7985 171.587 48.6928C171.767 48.5851 171.982 48.5313 172.233 48.5313C172.374 48.5313 172.512 48.5538 172.647 48.5988C172.78 48.6439 172.913 48.7084 173.046 48.7926C173.177 48.8748 173.31 48.9746 173.445 49.0921C173.58 49.2095 173.72 49.3397 173.865 49.4825L174.699 50.2253L174.699 48.3933ZM172.846 44.9877L173.586 44.9877C173.907 44.9877 174.184 45.0219 174.417 45.0905C174.648 45.159 174.838 45.2578 174.987 45.387C175.133 45.5142 175.242 45.6659 175.312 45.842C175.383 46.0182 175.418 46.2139 175.418 46.4292C175.418 46.6015 175.397 46.762 175.354 46.9107C175.308 47.0595 175.239 47.1935 175.145 47.3129C175.051 47.4304 174.933 47.5321 174.79 47.6183C174.645 47.7024 174.473 47.767 174.273 47.812C174.073 47.857 173.844 47.8795 173.586 47.8795L172.846 47.8795C172.525 47.8795 172.25 47.8453 172.021 47.7768C171.79 47.7063 171.601 47.6075 171.455 47.4803C171.308 47.3511 171.2 47.1984 171.132 47.0223C171.061 46.8461 171.026 46.6504 171.026 46.4351C171.026 46.2628 171.049 46.1033 171.094 45.9565C171.137 45.8078 171.204 45.6737 171.296 45.5543C171.388 45.4349 171.507 45.3332 171.651 45.249C171.794 45.1648 171.965 45.1002 172.165 45.0552C172.363 45.0102 172.59 44.9877 172.846 44.9877ZM173.698 45.8362L172.732 45.8362C172.577 45.8362 172.442 45.845 172.327 45.8626C172.211 45.8782 172.113 45.9027 172.033 45.936C171.951 45.9693 171.884 46.0104 171.833 46.0593C171.782 46.1082 171.745 46.164 171.722 46.2266C171.698 46.2893 171.687 46.3588 171.687 46.4351C171.687 46.531 171.705 46.6161 171.742 46.6905C171.78 46.7629 171.839 46.8246 171.921 46.8755C172.002 46.9264 172.109 46.9655 172.244 46.9929C172.377 47.0184 172.54 47.0311 172.732 47.0311L173.698 47.0311C173.852 47.0311 173.988 47.0232 174.106 47.0076C174.223 46.99 174.324 46.9645 174.408 46.9313C174.49 46.896 174.558 46.8549 174.611 46.8079C174.662 46.759 174.699 46.7032 174.722 46.6406C174.746 46.576 174.758 46.5055 174.758 46.4292C174.758 46.3353 174.739 46.2521 174.702 46.1797C174.663 46.1053 174.602 46.0427 174.52 45.9918C174.436 45.9389 174.326 45.8998 174.191 45.8743C174.056 45.8489 173.891 45.8362 173.698 45.8362ZM174.699 41.4881L175.359 41.4881L175.359 44.4123L174.796 44.4123L173.313 43.0295C173.158 42.8905 173.022 42.7809 172.905 42.7006C172.786 42.6204 172.679 42.5626 172.585 42.5274C172.489 42.4902 172.398 42.4716 172.312 42.4716C172.183 42.4716 172.072 42.4932 171.98 42.5362C171.886 42.5793 171.814 42.6429 171.763 42.7271C171.712 42.8093 171.687 42.911 171.687 43.0324C171.687 43.1616 171.718 43.2731 171.781 43.3671C171.843 43.4591 171.93 43.5295 172.042 43.5785C172.153 43.6254 172.28 43.6489 172.421 43.6489L172.421 44.4974C172.166 44.4974 171.933 44.4367 171.722 44.3154C171.508 44.194 171.339 44.0228 171.214 43.8016C171.087 43.5804 171.023 43.3182 171.023 43.0148C171.023 42.7153 171.072 42.4628 171.17 42.2573C171.266 42.0498 171.405 41.8933 171.587 41.7876C171.767 41.6799 171.982 41.6261 172.233 41.6261C172.374 41.6261 172.512 41.6486 172.647 41.6936C172.78 41.7386 172.913 41.8032 173.046 41.8874C173.177 41.9696 173.31 42.0694 173.445 42.1869C173.58 42.3043 173.72 42.4344 173.865 42.5773L174.699 43.3201L174.699 41.4881ZM172.855 40.0936L172.855 39.6414C172.855 39.4966 172.831 39.3772 172.782 39.2833C172.731 39.1893 172.66 39.1198 172.57 39.0748C172.478 39.0278 172.372 39.0044 172.25 39.0044C172.141 39.0044 172.044 39.0259 171.96 39.0689C171.873 39.11 171.807 39.1737 171.76 39.2598C171.711 39.3459 171.687 39.4545 171.687 39.5857C171.687 39.6894 171.707 39.7853 171.748 39.8734C171.789 39.9615 171.847 40.0319 171.921 40.0848C171.996 40.1376 172.086 40.164 172.192 40.164L172.192 41.0125C171.957 41.0125 171.752 40.9499 171.578 40.8246C171.404 40.6974 171.268 40.5271 171.17 40.3138C171.072 40.1004 171.023 39.8655 171.023 39.6091C171.023 39.3195 171.07 39.066 171.164 38.8488C171.256 38.6315 171.392 38.4622 171.572 38.3408C171.752 38.2195 171.975 38.1588 172.241 38.1588C172.377 38.1588 172.508 38.1901 172.635 38.2528C172.76 38.3154 172.874 38.4054 172.975 38.5229C173.075 38.6383 173.155 38.7793 173.216 38.9456C173.275 39.112 173.304 39.2989 173.304 39.5064L173.304 40.0936L172.855 40.0936ZM173.498 40.0936L173.061 40.0936L173.061 39.5064C173.061 39.2735 173.087 39.0689 173.14 38.8928C173.193 38.7166 173.269 38.5689 173.369 38.4495C173.467 38.3301 173.583 38.24 173.718 38.1794C173.851 38.1187 173.999 38.0884 174.162 38.0884C174.361 38.0884 174.539 38.1265 174.696 38.2029C174.85 38.2792 174.982 38.3868 175.089 38.5258C175.197 38.6628 175.279 38.8233 175.336 39.0073C175.391 39.1913 175.418 39.3919 175.418 39.6091C175.418 39.7892 175.394 39.9663 175.345 40.1405C175.294 40.3128 175.218 40.4694 175.119 40.6103C175.017 40.7492 174.89 40.8608 174.737 40.945C174.582 41.0272 174.399 41.0683 174.188 41.0683L174.188 40.2198C174.298 40.2198 174.395 40.1924 174.482 40.1376C174.568 40.0828 174.635 40.0074 174.684 39.9115C174.733 39.8137 174.758 39.7051 174.758 39.5857C174.758 39.4506 174.733 39.3351 174.684 39.2392C174.633 39.1414 174.563 39.067 174.473 39.0161C174.381 38.9633 174.274 38.9368 174.153 38.9368C173.996 38.9368 173.871 38.9652 173.777 39.022C173.681 39.0787 173.611 39.16 173.566 39.2656C173.521 39.3713 173.498 39.4966 173.498 39.6414L173.498 40.0936Z'
                  fill='#10265F'
                />
              </svg>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant='h3' sx={{ mb: 1.5 }}>
                {`Welcome to Umber! 👋🏻`}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgColors.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='body2' sx={{ mb: 2, color: 'primary.main' }}>
                Admin: <strong>admin@vuexy.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='body2' sx={{ color: 'primary.main' }}>
                Client: <strong>client@vuexy.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      label='Email'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      placeholder='admin@vuexy.com'
                      error={Boolean(errors.email)}
                      {...(errors.email && { helperText: errors.email.message })}
                    />
                  )}
                />
              </Box>
              <Box sx={{ mb: 1.5 }}>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      {...(errors.password && { helperText: errors.password.message })}
                      type={showPassword ? 'text' : 'password'}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              edge='end'
                              onMouseDown={e => e.preventDefault()}
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  )}
                />
              </Box>
              <Box
                sx={{
                  mb: 1.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <FormControlLabel
                  label='Remember Me'
                  control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                />
                <Typography
                  component={LinkStyled}
                  href='/forgot-password'
                  color='#10265F'
                  sx={{ color: '#10265F', textDecoration: 'none' }}
                >
                  Forgot Password?
                </Typography>
              </Box>
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4, backgroundColor: '#10265F' }}>
                Sign In
              </Button>
              {/* <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>New on our platform?</Typography>
                <Typography href='/register' component={LinkStyled}>
                  Create an account
                </Typography>
              </Box> */}
              {/* <Divider
                sx={{
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                or
              </Divider> */}
              {/* <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton
                  href='/'
                  component={Link}
                  sx={{ color: '#497ce2' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  sx={{ color: '#1da1f2' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  sx={{ color: '#db4437' }}
                  onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
                >
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box> */}
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginPage.guestGuard = true

export default LoginPage
